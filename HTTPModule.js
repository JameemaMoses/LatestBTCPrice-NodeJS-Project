// Below code is completed and working which is done using HTTP module of Node.js
const AxiosClient = require('./axiosHTTPClient');
const logger = require('./logger');
const http = require('http');
const url = require('url');

var HTTPModuleServer = http.createServer(async(req,res) => {
    try{
    const queryObject = url.parse(req.url,true).query;
    var param = queryObject.symbol;
        if(req.url === '/') {
            res.write('Make a request as shown below to view the price of a Bitcoin in any given currency.\n');
            res.write('For Example\n');
            res.write('To view BTC price in USD: http://localhost:3000/?symbol=USD' + '\n');
            res.write('To view BTC price in NZD: http://localhost:3000/?symbol=NZD' + '\n');
            res.write('and so on for other currencies.\n');
            res.end();
            logger.info(`Server started and running on http://localhost:${port} for HTTP Module`);
        }
        if(req.url === `/?symbol=${param}`)
        {
            const cryptoAllData = await AxiosClient.getBitCoinPrice();
            const cryptoData = cryptoAllData.data;
            const BTCData = cryptoData[param];
            if(BTCData) {
                const BTCValue = JSON.stringify(BTCData['last']);
                const BTCSymbol = BTCData['symbol'];
                res.write(`1 BTC = $${BTCValue} ${BTCSymbol} at ${new Date().toISOString()}`);
                logger.info(`Viewing the data of BTC Value in ${BTCSymbol}`);
            } else {
                res.write(`The BTC value for the given currency ${param} doesn't exist.`);
                logger.info(`The BTC value for the given currency ${param} doesn't exist.`);
            }
            res.end();
        }
    } catch(error) {
        logger.error(error);
    }
});

const port = process.env.PORT || 3000;
HTTPModuleServer.listen(3000,console.log('Listening on port 3000'));

module.exports.HTTPModuleServer = HTTPModuleServer;