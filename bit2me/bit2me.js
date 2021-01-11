//funcion text saca el nombre de la cryptomoneda y su precio
function text(response) {
  var body = '';
  
  //for(elemento in response.data ){
    //recorre el array por data y muestra el name y el price del lugar correspondiente al 0 y 1 del array
    body += (  response.data[1].name +  " " + response.data[1].quote.USD.price + "\n ")
    body += (response.data[0].name + " " + response.data[0].quote.USD.price )
    
    
//}
  return body;
} 
const rp = require('request-promise');
const requestOptions = {
  method: 'GET',
  uri: 'https://pro-api.coinmarketcap.com/v1/cryptocurrency/listings/latest',
  
  headers: {
    'X-CMC_PRO_API_KEY': '35eaf8c9-735b-435d-bd18-5bc8329a606a' 
  },
  json: true,
  gzip: true 
  
};
function bucle (){
  

rp(requestOptions).then(response => {
  console.log('API call response: \n', text(response));
  
}).catch((err) => {
  console.log('API call error:', err.message);
  
})
}
setInterval(bucle, 60000);
