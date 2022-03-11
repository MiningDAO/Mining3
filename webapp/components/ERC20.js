import React from 'react';
import { ethers } from 'ethers';
import moment from 'moment';
import BigNumber from "bignumber.js";
import { useState, useEffect } from 'react';
import { Table, Modal, Divider, notification } from 'antd';
import Withdraw from './Withdraw.js';

const Status = {
  NO_DATA: 'no_data',
  LOADING_DATA: 'loading_data',
  DATA_LOADED: 'data_loaded',
  CONFIRMING: 'confirming',
  WITHDRAWING: 'withdrawing',
};

async function snapshots(contract, finalizedAt) {
    const address = await contract.signer.getAddress();
    let [ids, values] = await contract.balanceSnapshots(address);
    ids = Array.from(ids);
    values = Array.from(values);
    for (let i = 0; i < ids.length; i++) {
        if (ids[i].eq(finalizedAt)) {
            return {ids, values}
        } else if (ids[i].gt(finalizedAt)) {
            ids.splice(i, 0, finalizedAt),
            values.splice(i, 0, await contract.balanceOfAt(address, finalizedAt))
            return {ids, values};
        }
    }
    ids.push(finalizedAt);
    values.push(await contract.balanceOfAt(address, finalizedAt));
    return {ids, values};
}

function ERC20(props) {
    const [status, setStatus] = useState(Status.NO_DATA);
    const [dataSource, setDataSource] = useState([]);
    const [toWithdraw, setToWithdraw] = useState([]);

    const columns = [
        {
            title: 'From',
            dataIndex: 'from',
            key: 'from',
            render: (value, _row) => (
                <span>{new Date(value * 1000).toUTCString()}</span>
            ),
        },
        {
            title: 'To',
            dataIndex: 'to',
            key: 'to',
            render: (value, _row) => (
                <span>{new Date(value * 1000).toUTCString()}</span>
            ),
        },
        {title: 'Earning', dataIndex: 'earning', key: 'earning'},
        {title: 'Balance', dataIndex: 'balance', key: 'balance'},
        {title: 'Withdrawn', dataIndex: 'withdrawn', key: 'withdrawn'},
        {title: 'Finalized', dataIndex: 'finalized', key: 'finalized'},
    ];

    const fetchData = async () => {
        setStatus(Status.LOADING_DATA);
        const signer = props.contract.signer;
        const finalizedAt = await props.contract.lastFinalizedAt();
        const withdrawAt = await props.contract.lastWithdrawAt(
            await signer.getAddress()
        );

        let earningToken = await props.contract.earningToken();
        earningToken = new ethers.Contract(
            earningToken,
            ["function decimals() public view returns(uint8)"],
            signer
        );
        const decimals = await earningToken.decimals();

        const {ids, values} = await snapshots(props.contract, finalizedAt);
        let earningSums = await props.contract.batchEarningSum(ids);
        earningSums = earningSums.map(sum => new BigNumber(sum.toString()));
        const earning = (i) => {
            if (ids[i].lte(finalizedAt)) {
                return earningSums[i].minus(earningSums[i - 1]).div('1e+18');
            } else {
                return 0;
            }
        }

        ids.push(ethers.BigNumber.from(
            Math.floor(new Date().getTime() / 1000
        )));
        values.push(await props.contract.balanceOf(await signer.getAddress()));

        var dataSource = [];
        var totalEarning = new BigNumber(0);
        var unwithdrawnEarning = new BigNumber(0);
        for (let i = 1; i < ids.length; i++) {
            const snapshot = ids[i].toNumber();
            const balance = new BigNumber(values[i].toString()).div('1e+18');
            const earningPerToken = earning(i);
            const earningPerSnapshot = balance.times(earningPerToken);
            totalEarning = totalEarning.plus(earningPerSnapshot);
            const withdrawn = snapshot <= withdrawAt.toNumber() ? 'true' : 'false';
            if (withdrawn === 'false') {
                unwithdrawnEarning = unwithdrawnEarning.plus(earningPerSnapshot);
            }
            dataSource.push({
                key: i.toString(),
                from: ids[i - 1].toNumber(),
                to: snapshot,
                balance: balance.toFixed(),
                earning: earningPerSnapshot.toFixed(),
                withdrawn: withdrawn,
                finalized: snapshot <= finalizedAt.toNumber() ? 'true' : 'false',
            });
        }

        props.onEarning(totalEarning.toFixed(), unwithdrawnEarning.toFixed());
        setToWithdraw(unwithdrawnEarning.toFixed());
        setDataSource(dataSource);
    }

    useEffect(() => {
        fetchData().then(() => {
            setStatus(Status.DATA_LOADED);
        }).catch((err) => {
            setStatus(Status.NO_DATA);
            setDataSource([]);
            openNotification(err.toString());
        })
    }, []);

    const openNotification = (err) => {
      notification.open({
        message: 'Failed to call contract',
        description: err,
        onClick: () => {},
      });
    };

    const execWithdraw = async() => {
        setStatus(Status.WITHDRAWING);
        props.contract.withdraw().then((tx) => {
            return tx.wait(3);
        }).then((txReceipt) => {
            return fetchData();
        }).then(() => {
            setStatus(Status.DATA_LOADED);
        }).catch((err) => {
            setStatus(Status.NO_DATA);
            openNotification(err.toString());
        });
    }

    return (
      <div className='transfer'>
        <Withdraw
          status={status}
          confirmWithdraw={() => setStatus(Status.CONFIRMING)}
        >
        </Withdraw>
        <Divider />
        <Table
          rowClassName={(row) => {
              let classes = [];
              if (row.withdrawn === 'true') {
                  classes.push('withdrawed');
              }
              if (
                  status === Status.CONFIRMING &&
                  row.withdrawn === 'false' &&
                  row.finalized === 'true'
              ) {
                  classes.push('pending-withdraw');
              }
              return classes.join(' ');
          }}
          dataSource={dataSource}
          columns={columns}
          pagination={false}
          loading={status === Status.LOADING_DATA}
        />
        <Modal
          title="Confirm to withdraw"
          visible={status === Status.CONFIRMING}
          onOk={execWithdraw}
          onCancel={() => setStatus(Status.DATA_LOADED)}
        >
          {toWithdraw} BTCB
        </Modal>
      </div>
    );
}

export default ERC20;

export { Status };
