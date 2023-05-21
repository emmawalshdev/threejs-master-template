import Experience from "../Experience";
import Environment from "./Environment";
import Floor from "./Floor";
import Fox from "./Fox.js"

export default class World {
    constructor(){
        this.experience = new Experience(); // instantiate experience to access properties
        this.scene = this.experience.scene;
        this.resources = this.experience.resources; // instantiate resources for use of textures

        // make srue resources are ready before instantiating environment
        this.resources.on('ready', () => {

            // setup - order important, environment update func dependant on floor being loaded firsts
            this.floor = new Floor();
            this.fox = new Fox();
            this.environment = new Environment()
        });
    }
    update(){
        if(this.fox){
            this.fox.update();
        }
    }
}