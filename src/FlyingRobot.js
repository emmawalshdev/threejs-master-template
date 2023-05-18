import Robot from '/Robot.js'

export default class FlyingRobot extends Robot { // inherits everything from base class, can override base methods, use super to use base class
    constructor(name, legs) {
        super(name, legs)
    }
    sayHi(){
        console.log(`hi this is ${this.name}`);
    }
    takeOff(){
        console.log(`off goes ${this.name}`);
    }
}