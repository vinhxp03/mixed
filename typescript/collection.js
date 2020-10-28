var Collection = /** @class */ (function () {
    function Collection() {
        this.thing = [];
    }
    Collection.prototype.add = function (something) {
        this.thing.push(something);
    };
    Collection.prototype.get = function (index) {
        return this.thing[index];
    };
    return Collection;
}());
var string = new Collection();
var number = new Collection();
number.add(12345);
string.add("Hello");
console.log('string', string);
console.log('number', number);
