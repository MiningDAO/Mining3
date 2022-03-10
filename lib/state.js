const path = require('path');
const fs = require('fs');
const lodash = require('lodash');

function statePath(hre, subpath) {
    const p = path.join(hre.localConfig.statePath, hre.network.name, subpath);
    if (!fs.existsSync(p) && hre.network.name !== 'hardhat') {
        fs.mkdirSync(p, { recursive: true });
    }
    return p;
}

function contractPath(hre, subpath) {
    return path.join(statePath(hre, subpath), './contracts.json');
}

function loadJSON(hre, p) {
    if (hre.network.name == 'hardhat') {
        return {};
    }
    const content = fs.readFileSync(p, {flag: 'a+'});
    if (content.length == 0) {
        return {};
    }
    return JSON.parse(content);
}

function updateContract(hre, path, update) {
    if (hre.network.name == 'hardhat') {
        return;
    }
    const p = contractPath(hre, path);
    const contracts = loadJSON(hre, p);
    fs.writeFileSync(
        p,
        JSON.stringify(lodash.merge(contracts, update), null, 2)
    );
}

function tryLoadContracts(hre, path) {
    const p = contractPath(hre, path);
    return loadJSON(hre, p);
}

function loadMining3(hre, coin) {
    const p = contractPath(hre, coin);
    return require(p).mining3;
}

module.exports= {
    loadMining3,
    tryLoadContracts,
    updateContract,
}
