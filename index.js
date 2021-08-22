//The below code makes a call to HTTPModule.js
const HTTPModule = require('./HTTPModule');
HTTPModule.HTTPModuleServer;



/*const AxiosClient = require('./axiosHTTPClient');
const http = require('http');
const url = require('url');*/

// The Below code is completed using Express framework
//const express = require('express');
//const expressApp = express();

/*expressApp.get('/', (req,res) => {
    res.send(`Make a request as shown below to view the price of a Bitcoin in any given currency.<br>
    For Example:<br>
    To view BTC price in USD: http://localhost/USD <br>
    To view BTC price in NZD: http://localhost/NZD <br>
    and so on for other currencies`);
});

expressApp.get('/:currency',async(req,res) => {
    try
    {
        const param = req.params.currency;
        //res.send(param);
        if(param)
        {
            const cryptoAllData = await AxiosClient.getBitCoinPrice();
            const cryptoData = cryptoAllData.data;
            const BTCData = cryptoData[param];
            const BTCValue = JSON.stringify(BTCData['last']);
            const BTCSymbol = BTCData['symbol'];
            res.send(`1 BTC = $${BTCValue} ${BTCSymbol} at ${new Date().toISOString()}`);
        }
    }
    catch(error) {
        console.log(error);
    }
});

const port = process.env.PORT || 3000;
expressApp.listen(port, console.log(`Listening on port ${port}`));*/

// Below code is completed and working which is done using HTTP module of Node.js
/*var server = http.createServer(async(req,res) => {
        const queryObject = url.parse(req.url,true).query;
        var param = queryObject.symbol;
            if(req.url === '/') {
                res.write('Make a request as shown below to view the price of a Bitcoin in any given currency.\n');
                res.write('For Example\n');
                res.write('To view BTC price in USD: http://localhost/USD\n');
                res.write('To view BTC price in NZD: http://localhost/NZD\n');
                res.write('and so on for other currencies\n');
                res.end();
            }
            if(req.url === `/?symbol=${param}`)
            {
                const cryptoAllData = await AxiosClient.getBitCoinPrice();
                const cryptoData = cryptoAllData.data;
                const BTCData = cryptoData[param];
                const BTCValue = JSON.stringify(BTCData['last']);
                const BTCSymbol = BTCData['symbol'];
                res.write(`1 BTC = $${BTCValue} ${BTCSymbol} at ${new Date().toISOString()}`);
                res.end();
            }
});

const port = process.env.PORT || 3000;
server.listen(3000,console.log('Listening on port 3000'));*/

