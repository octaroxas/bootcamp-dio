/**fetch -> api para requisições, utilizando promises
 * retorna uma promise
 */

var mHeaders = new Headers()
mHeaders.append('Content-Type', 'application/json');
mHeaders.append('Content-Type', 'application/json');
mHeaders.append('Accept', 'application/json');

mHeaders.append('Access-Control-Allow-Origin', 'http://localhost:8888');
mHeaders.append('Access-Control-Allow-Credentials', 'true');

mHeaders.append('GET', 'POST', 'OPTIONS');
const myInit = {
    method: 'GET',
    headers: mHeaders,
    mode: 'no-cors',
    cache: 'default',
}

fetch('http://localhost:8888/data.json',myInit)
    .then(responseStream => {
        responseStream.json()
    }).then(data=>{ console.log(data)})