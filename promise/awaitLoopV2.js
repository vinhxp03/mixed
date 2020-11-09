const call = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1000);
    })
}

let count = 0;
const test = async items => {
    /* items.forEach(async item => {
        await call();

        count ++;
    }); */

    items.map(async item => {
        await call();

        count ++;
    });

    console.log('count', count);
}

test([1,2,3,4]);