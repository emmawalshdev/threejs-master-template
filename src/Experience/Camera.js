import Experience from "./Experience";
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default class Camera {
    constructor(){ 
        // this.experience = experience // pass it in as a parameters
        this.experience = new Experience();
        // save properties from experience class 
        this.sizes = this.experience.sizes
        this.scene = this.experience.scene
        this.canvas = this.experience.canvas
        this.time = this.experience.time

        this.setInstance(); // call method
        this.setOrbitControls();
    }

    // methods - can be placed in constructor above, but seperated below for better org
    setInstance(){
        // camera
        this.instance = new THREE.PerspectiveCamera(
            35,
            this.sizes.width/this.sizes.height,
            0.1,
            100
        )
        this.instance.position.set(6,4,8);
        this.scene.add(this.instance);
    }
    setOrbitControls(){
        this.controls = new OrbitControls(this.instance, this.canvas);
        this.controls.enableDamping = true;
    }
    resize(){
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }
    update(){
        this.controls.update(); // update orbit controls on each frame
    }
}