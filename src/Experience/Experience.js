import * as THREE from 'three'
import Sizes from '/Utils/Sizes.js'
import Time from '../Utils/Time';

export default class Experience {
    constructor(canvas){
        console.log('constructor run');
        window.experience = this; // access it via console

        // options
        this.canvas = canvas;
        console.log(this.canvas);

        // setup - instantiate classes imported
        this.sizes = new Sizes();
        this.time = new Time();

        // sizes resize event
        this.sizes.on('resize', () => {
            this.resize(); // call the function, context not lost with =>
        });

        // time tick event
        this.time.on('tick', () => {
            this.update(); // call the update function below
        });
    }
    resize(){
        console.log('A resize occured');
    }

    update(){
        // console.log('update the experience');
    }
}