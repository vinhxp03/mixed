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

/* readFile('song1.txt')
	.then(onDone)
	.then(function() {
		return readFile('song2.txt');
	})
	.then(function() {
		console.log("message: ", "Nothing");
	})
	.catch(onError); */

let files = ['song1.txt', 'song2.txt'];
async function loop() {
	files.forEach(async file => {
		let result = await readFile(file);
		console.log('result', result);
	});
}

loop();
console.log('end Loop!');

