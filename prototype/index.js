function Person() {
    this.firstName = "Join";
    this.lastName = "Hand";
    this.getName = function () {
        return `Hello ${this.firstName} ${this.lastName}`;
    };
}

function Men(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var person = new Person();

Men.prototype = new Person();
var men = new Men("Vinh", "Phan");

console.log(men.getName());