import React from 'react';
import { Button, Spin } from 'antd';
import { MoneyCollectOutlined } from '@ant-design/icons';

import { Status } from './ERC20.js';

function Withdraw(props) {
    return (
        <div>
          {
            props.status === Status.WITHDRAWING
              ? <Spin tip="Executing..."/>
              : <Button
                  key="2"
                  type="primary"
                  icon={<MoneyCollectOutlined />}
                  danger
                  size="small"
                  onClick={props.confirmWithdraw}
                >
                  {'Withdraw'}
                </Button>
          }
        </div>
    );
}

export default Withdraw;
