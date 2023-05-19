import Experience from "./Experience/Experience";
import * as THREE from 'three'

export default class Renderer {
    constructor(){
        this.experience = new Experience(); // will use the same experience (instance 1);
        this.canvas = this.experience.canvas;
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.camera = this.experience.camera;

        this.setInstance(); //call method
    }

    setInstance(){
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            antialias: true
        });
        console.log(this.instance)
    }
}