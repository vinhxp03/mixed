let fun = (name: string) : string[] => {
    console.log('name', name);
    return ['1'];
}

class Person {
    protected name: string;

    constructor (name: string) {
        this.name = name;
    }
}

class Employee extends Person {
    private age: number;

    constructor (name: string, age: number) {
        super(name);
        this.age = age;
    }

    public getInfo() {
        return `Hello, my name is ${this.name} and I ${this.age} year old.`
    }

    public static getAge() {
        return `Ahiihi`;
    }
}

let a = new Person("Vinh");

console.log('a', a);

let b = new Employee("Vinh", 25);

console.log('b', b);

let c = b.getInfo();
console.log('c', c);
