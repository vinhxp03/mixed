const fetch = require('node-fetch');
const axios = require('axios');

// https://reqres.in/api/users?page=1

// fetch('https://reqres.in/ap')
/* fetch('https://reqres.in/api/users?page=1')
    .then(res => res.json())
    .then(json => console.log('json', json)); */

// result = axios.get('https://reqres.in/api/users?page=2')
//     .then(res => console.log('res', res.data))
//     .catch(err => console.log('err', err));

// console.log('result', result);
console.log('Test Fetch API');

async function getData() {
    let result;
    console.log('get data');

    await axios.get('https://reqres.in/api/users?page=1')
        .then(res => result = res.data)
        .catch(err => console.log('err', err));
    
    console.log('Done');
    return result;    
}

getData().then(result => console.log('result', result));