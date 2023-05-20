import EventEmitter from "./EventEmitter";
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as THREE from 'three'

export default class Resources extends EventEmitter {
    constructor(sources){
        super()

        // options
        this.sources = sources;

        // setup
        this.items = {}; // empty obj for textures
        this.toLoad = this.sources.length;
        this.loaded = 0;

        this.setLoaders();
        this.startLoading();
    }
    setLoaders(){
        this.loaders = {}; // empty obj for laoders
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.textureLoader = new THREE.TextureLoader();
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader()
    }
    
    startLoading(){ // loop through textures and load
        for(const source of this.sources){
            console.log('source', source.type);

            if(source.type == 'gltfModel'){
                this.loaders.gltfLoader.load(
                    source.path, 
                    (file) => {
                        this.sourceLoaded(source, file)
                    }   
                )
            }
            else if(source.type == 'texture'){
                this.loaders.textureLoader.load(
                    source.path, (file) => {
                    this.sourceLoaded(source, file)
                    }
                )
            } else if(source.type == 'cubeTexture'){
                console.log('hello')
                this.loaders.cubeTextureLoader.load(
                    source.path, (file) => {
                    this.sourceLoaded(source, file); // call below method
                    }
                )
            }
        }
    }

    sourceLoaded(source, file){ // called everythime something is loaded
        console.log(this.items)
        this.items[source.name] = file; // name specified in sources.js
        this.loaded++

        // console.log('items: ', this.items)
        // console.log('sources: ',this.sources)

        // if finished run the func
        if(this.loaded === this.toLoad){
            console.log('finished');
            this.trigger('ready');
            console.log('loaded', this.loaded); // increment loaded
        }
    }
}