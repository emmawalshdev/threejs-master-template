import Experience from "../Experience";
import * as THREE from 'three'
import Environment from "./Environment";

export default class World {
    constructor(){
        this.experience = new Experience(); // instantiate experience to access properties
        this.scene = this.experience.scene;
        console.log('world', this.scene);

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry( 1, 1, 1 ),
            new THREE.MeshStandardMaterial( {color: 0x00ff00} )
        )
        this.scene.add(cube)

        // setup
        this.environment = new Environment()
    }
}