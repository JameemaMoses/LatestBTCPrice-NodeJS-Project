// The Below code is completed using Express framework
const AxiosClient = require('./axiosHTTPClient');
const logger = require('./logger');
const express = require('express');
const expressApp = express();

function ExpressAppFramework() {

expressApp.get('/', (req,res) => {
    res.send(`Make a request as shown below to view the price of a Bitcoin in any given currency.<br>
    For Example:<br>
    To view BTC price in USD: http://localhost:3000/USD <br>
    To view BTC price in NZD: http://localhost:3000/NZD <br>
    and so on for other currencies`);
    logger.info(`Server started and running on http://localhost:${port} for Express Framework`);
});

expressApp.get('/:currency',async(req,res) => {
    try
    {
        const param = req.params.currency;
        if(param.length === 3) {
        const cryptoAllData = await AxiosClient.getBitCoinPrice();
        const cryptoData = cryptoAllData.data;
        const BTCData = cryptoData[param];
        if(BTCData) {
            const BTCValue = JSON.stringify(BTCData['last']);
            const BTCSymbol = BTCData['symbol'];
            res.send(`1 BTC = $${BTCValue} ${BTCSymbol} at ${new Date().toISOString()}`);
            logger.info(`Viewing the data of BTC Value in ${BTCSymbol}`);
            }  else {
                res.send(`The BTC value for the given currency ${param} doesn't exist.`);
                logger.info(`The BTC value for the given currency ${param} doesn't exist.`);
            }    
        }
    }
    catch(error) {
        logger.error(error);
    }
});
}

const port = process.env.PORT || 3000;
expressApp.listen(port, console.log(`Listening on port ${port}`));

module.exports.ExpressAppFramework = ExpressAppFramework;