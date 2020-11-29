var isTrue = false;

function call() {
    console.log('Start ...');
    let result = new Promise((resolve, reject) => {
        if (isTrue) {
            resolve("Call success!");
        }
        
        reject("Call failed!");
    });

    result.then(rsCall => console.log('rsCall', rsCall))
        .catch(errCall => console.log('errCall', errCall));

    console.log('result Call', result);
    console.log('End ...');
    return result;
}


call()
.then(result => console.log('result', result))
.catch(error => console.log('error', error));

console.log('...111...')

function returnPromise() {
    return Promise.resolve("Success");
}

console.log('returnPromise()', returnPromise());