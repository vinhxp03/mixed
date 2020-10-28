var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var fun = function (name) {
    console.log('name', name);
    return ['1'];
};
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age) {
        var _this = _super.call(this, name) || this;
        _this.age = age;
        return _this;
    }
    Employee.prototype.getInfo = function () {
        return "Hello, my name is " + this.name + " and I " + this.age + " year old.";
    };
    return Employee;
}(Person));
var a = new Person("Vinh");
console.log('a', a);
var b = new Employee("Vinh", 25);
console.log('b', b);
var c = b.getInfo();
console.log('c', c);
