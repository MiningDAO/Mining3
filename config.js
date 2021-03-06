require('dotenv').config();
const fs = require('fs');
const path = require('path');
const BigNumber = require('bignumber.js');

const config = {
    accounts: [
        process.env.ADMIN,
        process.env.DEPLOYER,
        process.env.TEST,
    ],
    dao: {
        mumbai: {
            token: '0x0E4924dd25415F0C702DEB81f143E6dCCB63FAAC',
        },
        matic: {
            token: '0xb2752E0a433A41f19E9348B720d9B9cf9CC433Ee',
            governor: '0xa59dccAd0f1ded519CF8Bd77a5b1eCACf6102691',
            timelock: '0xE0CBB44Ab7C2f42a3AaCBf8E8C37BEb9C53118b5',
        },
    },
    governor: {
        matic: {
            votingDelay: "37565",
            votingPeriod: "37565",
            proposalThreshold: "100000000000000000000000",
        },
    },
    statePath: path.join(__dirname, './state/'),
    courier: {
        brand: process.env.COURIER_BRAND_ID,
        auth_token: process.env.COURIER_AUTH_TOKEN,
        gnosis_recipient_id: process.env.COURIER_GNOSIS_RECIEPINET_ID,
        e2e_recipient_id: process.env.COURIER_E2E_RECIEPINET_ID,
        profile: process.env.COURIER_PROFILE
    },
    chainlink: {
        bsc: {
            btc: '0x264990fbd0A4796A3E3d8E37C4d5F87a3aCa5Ebf',
        },
        bscdev: {
            btc: '0x5741306c21795FdCBb9b265Ea0255F499DFe515C',
        },
        matic: {
            btc: '0xc907E116054Ad103354f2D350FD2514433D57F6f',
        },
        mumbai: {
            btc: '0x007A22900a3B98143368Bd5906f8E17e9867581b',
        },
    },
    swapRouter: {
        bsc: {
            address: '0x10ED43C718714eb63d5aA57B78B54704E256024E',
            version: 2,
        },
        bscdev: {
            address: '0x9Ac64Cc6e4415144C455BD8E4837Fea55603e5c3',
            version: 2,
        }
    },
    alchemy: {
        matic: process.env.ALCHEMY_MATIC,
        mumbai: process.env.ALCHEMY_MATIC_DEV,
        rinkeby: process.env.ALCHEMY_RINKEBY
    },
    gnosisSafe: {
        api: {
            rinkeby: 'https://safe-transaction.rinkeby.gnosis.io',
            bsc: 'https://safe-transaction.bsc.gnosis.io',
        },
        admin: {
            bsc: '0x782A6a9Bc11Fb6e8320b92f2217AfD80f813Bd05',
            rinkeby: '0xf24c00BafB6Cb10C5EA13Fa896526df604EE2B19',
        }
    },
    hashPerToken: {
        btc: new BigNumber('1e+12'),
    },
    antpool: {
        api: 'https://v3.antpool.com/api/',
        userId: process.env.ANTPOOL_SIGN_ID,
        key: process.env.ANTPOOL_KEY,
        secret: process.env.ANTPOOL_SECRET,
        feePercent: 0.005,
    },
    earningToken: {
        bsc: {
            btc: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c'
        }
    },
    paymentToken: {
        bsc: '0xe9e7cea3dedca5984780bafc599bd69add087d56', // BUSD
        bscdev: '0x78867BbEeF44f2326bF8DDd1941a4439382EF2A7', // BUSD
    },
    binance: {
        prod: {
            key: process.env.BINANCE_KEY,
            secret: process.env.BINANCE_SECRET,
            api: 'https://api.binance.com'
        },
        test: {
            key: process.env.BINANCE_TEST_KEY,
            secret: process.env.BINANCE_TEST_SECRET,
            api: 'https://testnet.binance.vision'
        }
    },
    scan: {
        bsc: {
            api: "https://api.bscscan.com/api",
            key : process.env.BSC_SCAN_KEY
        },
        bscdev: {
            api: "https://api-testnet.bscscan.com/api",
            key: process.env.BSC_SCAN_KEY
        },
        matic: {
            api: "https://api.polygonscan.com/api",
            key: process.env.POLY_SCAN_KEY,
        },
        mumbai: {
            api: "https://api-testnet.polygonscan.com/api",
            key: process.env.POLY_SCAN_KEY,
        },
    },
    enableGasReporter: true
};

module.exports = config;
