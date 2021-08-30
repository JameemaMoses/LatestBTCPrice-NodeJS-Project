const axios = require('axios');

async function getBitCoinPrice() {
    try
    {
         return await axios.get('https://blockchain.info/ticker');
    }
    catch(error)
    {
        console.log(error);
    }
}

module.exports.getBitCoinPrice = getBitCoinPrice;
