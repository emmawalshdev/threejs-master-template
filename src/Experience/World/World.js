import Experience from "../Experience";
import * as THREE from 'three'
import Environment from "./Environment";
import Floor from "./Floor";

export default class World {
    constructor(){
        this.experience = new Experience(); // instantiate experience to access properties
        this.scene = this.experience.scene;
        this.resources = this.experience.resources; // instantiate resources for use of textures

        const cube = new THREE.Mesh(
            new THREE.BoxGeometry( 1, 1, 1 ),
            new THREE.MeshStandardMaterial( )
        )
        this.scene.add(cube)

        // make srue resources are ready before instantiating environment
        this.resources.on('ready', () => {

            // setup - order important, environment update func dependant on floor being loaded firsts
            this.floor = new Floor();
            this.environment = new Environment()
        });
    }
}