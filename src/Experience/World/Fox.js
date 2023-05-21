import Experience from "../Experience";
import * as THREE from 'three'

export default class Floor {
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.debug = this.experience.debug;
        console.log(this.debug);

        // debug
        if(this.debug.active){
            this.debugFolder = this.debug.ui.addFolder('fox');
            console.log(this.debugFolder);
        }

        // setup
        this.resource = this.resources.items.foxModel; // get gltf model

        this.setModel();
        this.setAnimation();
    }
    setModel(){
        this.model = this.resource.scene;
        this.model.scale.set(0.02, 0.02, 0.02);
        this.scene.add(this.model);

        this.model.traverse((child) => {
            if(child instanceof THREE.Mesh){
                child.castShadow = true;
            }
        });
    }
    setAnimation(){
        this.animation = {} // empty obj for animation
        this.animation.mixer = new THREE.AnimationMixer(this.model);
        this.animation.action = this.animation.mixer.clipAction(this.resource.animations[0]); // use first animation
        this.animation.action.play(); // play animation, needs to be updated on each frame
    }
    update(){
        // console.log('update the fox');
        this.animation.mixer.update(this.time.delta * 0.001);
    }
}