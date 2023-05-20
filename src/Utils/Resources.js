import EventEmitter from "./EventEmitter";

export default class Resources extends EventEmitter {
    constructor(sources){
        super()

        console.log(sources);

        // options
        this.sources = sources;
    }
}