// Only change code below this line
class Pets {
    constructor (name, legs) {
        this._name = name;
        this.legs = legs;
    }
    walk (numberOfLegs) {
        console.log("${this._name} is walking on ${this.legs}");
    }
}
class Dog extends Pets {
    constructor(name, legs) {
        super(Pets)
        this._name = name;
        this.legs = legs;    
    }
    bark(dogSay) {
        return "${this._name} says WUF-WUF";
    }
}
// Only change code above this line

let.dog = new Dog("Pujdo", 4); // Change this line
console.log(dog.walk());
console.log(dog.bark());

module.exports = {
    Pets,
    Dog
}