import Debug from "../../Utils/Debug";
import Experience from "../Experience";
import * as THREE from 'three'

export default class Floor {
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.time = this.experience.time;
        this.debug = this.experience.debug;

        // debug
        if(this.debug.active){
            this.debugFolder = this.debug.ui.addFolder('fox');
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
        this.animation.actions = {} // empty obj to hold animations

        this.animation.actions.idle = this.animation.mixer.clipAction(this.resource.animations[0]); // use first animation
        this.animation.actions.walking = this.animation.mixer.clipAction(this.resource.animations[1]); // use second animation
        this.animation.actions.running = this.animation.mixer.clipAction(this.resource.animations[2]); // use third animation

        // create current variable to hold default
        this.animation.actions.current = this.animation.actions.idle;

        // play current
        this.animation.actions.current.play(); // needs to be updated on each frame - experience.js

        this.animation.play = (name) => {
            const newAction = this.animation.actions[name];
            const oldAction = this.animation.actions.current;

            newAction.reset();
            newAction.play();
            newAction.crossFadeFrom(oldAction, 1);

            this.animation.actions.current = newAction; // set current to most recent action
        }

        // debug
        if(this.debug.active){
            const debugObject = {
                playIdle: ()=>{
                    this.animation.play('idle') 
                },
                playWalking: ()=>{
                    this.animation.play('walking')
                },
                playRunning: ()=>{
                    this.animation.play('running')
                }
            }
            //play animations
            this.debugFolder.add(debugObject, 'playIdle');
            this.debugFolder.add(debugObject, 'playWalking');
            this.debugFolder.add(debugObject, 'playRunning');
        }
    }

    update(){
        // console.log('update the fox');
        this.animation.mixer.update(this.time.delta * 0.001);
    }
}