import * as THREE from 'three'
import Sizes from '/Utils/Sizes.js'
import Time from '../Utils/Time';
import Camera from './Camera';
import Renderer from '../Renderer';

let instance = null // singleton

export default class Experience {
    constructor(canvas){

        if(instance){
            console.log('b');
            return instance
        }
        instance = this;
        console.log('a');

        window.experience = this; // access it via console, global variable

        // options
        this.canvas = canvas;
        console.log(this.canvas);

        // setup - instantiate classes imported
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.camera = new Camera(); // can pass this in this as a parameter for use in camera.js
        this.renderer = new Renderer(); 

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
        this.camera.resize();
    }

    update(){
        // console.log('update the experience');
        this.camera.update()
    }
}