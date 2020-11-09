var fs = require('promise-fs');

function onDone (song) {
	console.log("message: ", song);
}

function onError (err) {
	console.log("error: ", err);
}

function readFile (path) {
	return fs.readFile(path, {encoding: 'utf8'});
}

const sleep = ms => {
	return new Promise(resolve => setTimeout(resolve, ms));
}

/* readFile('song1.txt')
	.then(onDone)
	.then(function() {
		return readFile('song2.txt');
	})
	.then(function() {
		console.log("message: ", "Nothing");
	})
	.catch(onError); */

let files = [
	{
		path: 'song1.txt',
		timeout: 2000
	}, 
	{
		path: 'song2.txt',
		timeout: 1000
	}
];

const awaitLoop = async (file) => {
	console.log(`sleep ${file.timeout}ms reading ${file.path}`);

	await sleep(file.timeout);
	result = await readFile(file.path);
	
	console.log('result', result);
	return result;
}

async function loopFor() {
	let len = files.length;
	let response = [];

	for (let i = 0; i < len; i++) {
		response.push(await awaitLoop(files[i]));
	}

	console.log('end Loop!');
	console.log('response', response);
}

async function loopForEach() {
	let response = [];

	files.forEach(async file => {
		response.push(await awaitLoop(file));
	});

	console.log('end Loop!');
	console.log('response', response);
}

async function loopForMap() {
	let response = [];

	files.map(async file => {
		response.push(await awaitLoop(file));
	});

	console.log('end Loop!');
	console.log('response', response);
} 

async function loopForOf() {
	let response = [];

	for (const file of files) {
		response.push(await awaitLoop(file));
	}

	console.log('end Loop!');
	console.log('response', response);
}

async function loopPromiseMap() {
	let response = await Promise.all(files.map(async file => {
		return await awaitLoop(file);
	}));

	console.log('end Loop!');
	console.log('response', response);
}

// loopFor();
// loopForOf();
// loopForEach();
// loopForMap();
loopPromiseMap();

