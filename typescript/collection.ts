class Collection<T> {
    private thing: T[];

    constructor () {
        this.thing = [];
    }

    add (something: T) : void {
        this.thing.push(something);
    }

    get (index: number) : T {
        return this.thing[index];
    }
}

let string = new Collection<String>();
let number = new Collection<Number>();

number.add(12345);
string.add("Hello");

console.log('string', string);
console.log('number', number);
