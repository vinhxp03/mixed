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

readFile('song1.txxt')
	.then(onDone)
	.catch(onError);

