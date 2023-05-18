import EventEmitter from "./EventEmitter";

export default class Time extends EventEmitter {
    constructor(){
        super()
        // setup
        this.start = Date.now();
        this.current = this.start // to be changed on each frame
        this.elapsed = 0;
        this.delta = 16; // default screen runs at 50 fps, 0 can cause bugs

        // call the tick function
        window.requestAnimationFrame(()=> {
            this.tick();
        })
    }

    // tick method
    tick(){
        const currentTime = Date.now();
        this.delta = currentTime - this.current // will be 16/17 as fps
        this.current = currentTime
        this.elapsed = this.current - this.start // time since page opened

        this.trigger('tick');

        window.requestAnimationFrame(()=> { // use arrow function so context won't be lost
            this.tick();
        })
    }
}