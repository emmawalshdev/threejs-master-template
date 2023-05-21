import * as dat from 'lil-gui'

export default class Debug {
    constructor(){
        this.active = window.location.hash === '#debug'; // log true if # value == debaug
        console.log(this.active);

        if(this.active){ // access debug only on #debug
            this.ui = new dat.GUI();
        }
    }
}