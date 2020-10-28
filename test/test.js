const obj = {a:0};

const dict = new Map();
dict.set('foo', 123)
    .set(obj, 'hello world');

console.table(dict);

var hel = dict.get('bo') || dict.get('fo') || 'nonew';

console.log('hel', hel);