import Experience from "../Experience";
import * as THREE from 'three'

export default class Floor {
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources;
        this.resource = this.resources.items.foxModel; // get gltf model

        this.setModel();
    }
    setModel(){
        this.model = this.resource.scene;
        this.model.scale.set(0.02, 0.02, 0.02);
        this.scene.add(this.model);

        this.model.traverse((child) => {
            console.log(child);
            if(child instanceof THREE.Mesh){
                child.castShadow = true;
            }
        });
    }
}