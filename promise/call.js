var isTrue = false;

function call() {
    return new Promise((resolve, reject) => {
        if (isTrue) {
            resolve("Call success!");
        }
        
        reject("Call failed!");
    });
}

call()
.then(result => console.log('result', result))
.catch(error => console.log('error', error));

function returnPromise() {
    return Promise.resolve("Success");
}

console.log('returnPromise()', returnPromise());