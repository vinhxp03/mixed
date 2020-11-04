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

console.log('person', person);
console.log(person.getName());

Men.prototype = new Person();

var men = new Men("Vinh", "Phan");
console.log('men', men);

console.log(men.getName());