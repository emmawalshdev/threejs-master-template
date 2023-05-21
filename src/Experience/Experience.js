import * as THREE from 'three'
import Sizes from '/Utils/Sizes.js'
import Time from '../Utils/Time';
import Camera from './Camera';
import Renderer from '../Renderer';
import World from './World/World';
import Resources from '../Utils/Resources';
import sources from './sources';
import Debug from '../Utils/Debug';

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

        // setup - instantiate classes imported
        this.debug = new Debug();
        this.sizes = new Sizes();
        this.time = new Time();
        this.scene = new THREE.Scene();
        this.resources = new Resources(sources);
        this.camera = new Camera(); // can pass this in this as a parameter for use in camera.js
        this.renderer = new Renderer(); 
        this.world = new World();

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
        // propogate resuze to children
        this.camera.resize(); // call rezize camera method
        this.renderer.resize(); // call resize renderer method
    }

    // make sure update is run after resize
    update(){
        // console.log('update the experience');
        this.camera.update();
        this.world.update();
        this.renderer.update();
    }
}