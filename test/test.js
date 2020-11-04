const obj = {a:0};

const dict = new Map();
dict.set('foo', 123)
    .set(obj, 'hello world');

// console.table(dict);

var hel = dict.get('bo') || dict.get('fo') || 'nonew';

// console.log('hel', hel);
// --------------------------------------------------

function sayHi() {
    console.log('name', name);
    console.log('age', age);
    var name = "Lydia";
    let age = 21;
}
  
//   sayHi();
// --------------------------------------------------

const shape = {
    radius: 10,
    diameter() {
        console.log('this diameter', this);
        return this.radius * 2;
    },
    callback: function () {
        console.log('this callback', this);
        return this.radius;
    },
    perimeter: () => {
        this.sy = 5;

        console.log('this perimeter', this);
        return 2 * Math.PI * this.radius;
    }
  };
  
//   console.log('shape.diameter()', shape.diameter());
//   console.log('shape.perimeter()', shape.perimeter());
//   console.log('shape.callback()', shape.callback());
// --------------------------------------------------

const log = "ahihi";
/* console.log('+13+"f"', +-13+"3f");
console.log('+true', +true);
console.log('+false', +false);
console.log('+NaN', +NaN);
console.log('+""', +"");
console.log('+null', +null);
console.log('+undefined', +undefined); */
// --------------------------------------------------

const bird = {
    size: "small"
};
const mouse = {
    name: "Mickey",
    small: true
};

// console.log('bird["size"]', bird["size"]);
// console.log('mouse.bird.size', mouse.bird.size);
// console.log('mouse[bird.size]', mouse[bird.size]);
// console.log('mouse[bird["size"]]', mouse[bird["size"]]);
// --------------------------------------------------

class Chameleon {
    #private = "Vinh";

    static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
    }
    
    constructor({ newColor = "green" } = {}) {
        this.newColor = newColor;
        console.log('this.#private', this.#private);
    }

    getColor() {
        return this.newColor;
    }
}

class Chamelui extends Chameleon {
    constructor() {
        super();
        console.log('this', this);
    }
}
  
const freddie = new Chameleon({ newColor: "purple" });
// console.log('Chameleon.colorChange("orange")', Chameleon.colorChange("orange"));
// console.log('freddie.colorChange("orange")', freddie.colorChange("orange"));

// const feidi = new Chamelui();
// --------------------------------------------------

function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}
  
const lydia = new Person("Lydia", "Hallie");
const sarah = Person("Sarah", "Smith");

// console.log('lydia', lydia);
// console.log('sarah', sarah);
// console.log('global', global);
// console.log('this', this);
// --------------------------------------------------

function getAge(...args) {
    console.log(typeof args);
    console.log('args', args);
}
  
// getAge(21, "asd");
// --------------------------------------------------

var blog = {
    domain : "gugo.net",
    author : "Joun Den",
    showWebsite : function (callbackFunction){
        callbackFunction();
    },
    render : function(){
        // let _self = this;

        this.showWebsite(function(){
            // console.log('_self', _self);

            console.log('this', this);
            console.log('this.domain', this.domain); 
            console.log('this.author', this.author); 
        }.bind(this));
    }
};
 
// blog.render();
// --------------------------------------------------