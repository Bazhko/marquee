const axios = require('axios');
const params = {
  access_key: 'afb115a6a6b023ff52f52d1a8595a5cf'
}

axios.get('https://api.marketstack.com/v1/tickers/ndx.indx,dji.indx,gspc.indx,imoex.indx,gdaxi.indx/eod', {params})
  .then(response => {
    const apiResponse = response.data;
    if (Array.isArray(apiResponse['data'])) {
        apiResponse['data'].forEach(stockData => {
              console.log(`Ticker ${stockData['symbol']}`,
                  `has a day high of ${stockData['high']},
                  `on ${stockData['date']}`);
        });
    }
  }).catch(error => {
    console.log(error);
  });