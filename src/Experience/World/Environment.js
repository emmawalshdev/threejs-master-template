import Experience from "../Experience";
import * as THREE from 'three'

export default class Environment {
    constructor(){
        this.experience = new Experience();
        this.scene = this.experience.scene;
        this.resources = this.experience.resources; // get access to resources
        this.debug = this.experience.debug;

        // debug
        if(this.debug.active){
            this.debugFolder = this.debug.ui.addFolder('Environment');
        }

        // light
        this.setSunLight();
        this.setEnvironmentMap();
    }

    setSunLight(){
        this.sunlight = new THREE.DirectionalLight('#ffffff', 4)
        this.sunlight.castShadow = true
        this.sunlight.shadow.camera.far = 15
        this.sunlight.shadow.mapSize.set(1024, 1024)
        this.sunlight.shadow.normalBias = 0.05
        this.sunlight.position.set(3.5, 2, - 1.25)
        this.scene.add(this.sunlight);

        // sunlight debug
        if(this.debug.active){
            this.debugFolder
                .add(this.sunlight, 'intensity')
                .name('sunLightIntensity')
                .min(0)
                .max(10)
                .step(0.001)

            this.debugFolder
                .add(this.sunlight.position, 'x')
                .name('SunlightPositionX')
                .min(0)
                .max(10)
                .step(0.001)
            this.debugFolder
                .add(this.sunlight.position, 'y')
                .name('SunlightPositionY')
                .min(0)
                .max(10)
                .step(0.001)
            this.debugFolder
                .add(this.sunlight.position, 'z')
                .name('SunlightPositionZ')
                .min(0)
                .max(10)
                .step(0.001)
        }
    }
    setEnvironmentMap(){
        this.environmentMap = {}
        this.environmentMap.intensity = 0.4;
        this.environmentMap.texture = this.resources.items.environmentMapTexture;
        // this.environmentMap.texture.encoding = THREE.sRGBEncoding;

        this.scene.environment = this.environmentMap.texture;

        // traverse scene to add snv map to meshes
        this.environmentMap.updateMaterials = () => {
            this.scene.traverse((child)=> {
                // check only for standatf material meshes
                if(child instanceof THREE.Mesh && child.material instanceof THREE.MeshStandardMaterial){
                    child.material.envMap = this.environmentMap.texture;
                    child.material.envMapIntensity = this.environmentMap.intensity;
                    child.material.needsUpdate = true;
                }
            });
        }

        this.environmentMap.updateMaterials()

        // debug
        if(this.debug.active){
            this.debugFolder
              .add(this.environmentMap, 'intensity')
              .name('envMapIntensity')
              .min(0)
              .max(4)
              .step(0.001)
              .onChange(this.environmentMap.updateMaterials)
        }

    }

}