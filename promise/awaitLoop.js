const fruitBasket = {
    apple: 27,
    grape: 0,
    pear: 14
}

const getNumFruit = fruit => {
    return sleep(2000).then(() => fruitBasket[fruit]);
}

const sleep = ms => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

/* const numApples = getNumFruit('apple')
    .then(num => {
        console.log('num', num);
    }); */

// console.log('numApples', numApples);

const control = async () => {
    console.log('Start');

    const numApples = await getNumFruit('apple');
    console.log('numApples', numApples);

    const numPears = await getNumFruit('pear');
    console.log('numPears', numPears);

    console.log('End');
}

// control();

const fruitList = ['apple','grape','pear'];

const forLoop = async () => {
    console.log('Start');
    console.log('fruitList.length', fruitList.length)

    for (let i = 0; i < fruitList.length; i++) {
        let fruit = fruitList[i];

        const numFruit = await getNumFruit(fruit);
        console.log(`numFruit - ${fruit}`, numFruit);
    }

    console.log('End');
}

forLoop();