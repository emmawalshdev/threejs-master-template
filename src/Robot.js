export default class Robot { //// base class, a method called automatically upon instantiation, 
    constructor(name, legs){
        this.name = name
        this.legs = legs

        console.log(`I am ${name} and I have ${legs} legs`);
    }
    sayHi(){
        console.log(`hello my name is ${name}`);
    }
}