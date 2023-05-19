import Experience from "../Experience";
import * as THREE from 'three'

export default class World {
    constructor(){
        this.experience = new Experience(); // instantiate experience to access properties
        this.scene = this.experience.scene;
        console.log('world', this.scene);

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry( 1, 1, 1 ),
            new THREE.MeshBasicMaterial( {color: 0x00ff00} )
        )
        this.scene.add(cube)
    }
}