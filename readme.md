# Three.js Master Template - for use in Larger Projects

<a href="https://threejs-master-template.vercel.app/#debug">
  <img src="https://i.ibb.co/x1yL0Xx/Capture.png" alt="app cover image">
</a>

##  Purpose
This a starter template for larger Three.js pojects.
In this structure, code is separated into classes & imported as required via modules.

Benefits of using this structure include:
- Cleaner code, easy to maintain
- Reusability of classes
- Easy to colloborate with other developers (less conflicts)
- Use of modules means classes as imported as needed, fewer conflicts with variables 

## Features
The template includes the following features

- Full setup for camera, renderer & scene featuring a sample fox glTF model
- Time class with tick function (to be run on each frame)
- Resize class to handle window sizees & resizes
- Utils folder structure, the sub files can be resued
- Loaders for textures, GLTF models & cube textures
- A debugger with example tweaks, only available when #debug is added to the href
- A destroy method, which is needed on occasion. I.e., at the end of a level to clear a scene, camera, renderer and controls.

## Setup
1. Clone the repository
2. Make sure you have [Node.js](https://nodejs.org/en/download/) running on your PC.

Run this followed commands:

``` bash
# Install dependencies (only the first time)
npm install

# Run the local server at localhost:8080
npm run dev

# Build for production in the dist/ directory
npm run build
```
