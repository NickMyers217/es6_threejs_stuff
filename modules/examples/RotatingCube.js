import { BaseScene } from './BaseScene.js';

const THREE = require('three'),
      dat = require('dat-gui'),
      Stats = require('stats-js'),
      OrbitControls = require('three-orbit-controls')(THREE);

// A rotating cube scene that inherits from the base example scene
class RotatingCube extends BaseScene {
    constructor () {
        // Call the parent constructor
        super();

        // Create an axis
        this.axis = new THREE.AxisHelper(10);
        
        // Create a grid
        this.grid = ((g) => {
            g.setColors(new THREE.Color("rgb(255,0,0)"), 0x000000);
            return g;
        })(new THREE.GridHelper(50, 5));

        // Create a cube
        this.cube = ((geometry, material) => {
            let c = new THREE.Mesh(geometry, material);
            c.position.x = 2.5;
            c.position.y = 4;
            c.position.z = 2.5;
            c.castShadow = true;
            return c;
        })(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshLambertMaterial({color: 0x33ff00}));

        // Create a plane
        this.plane = ((geometry, material) => {
            let p = new THREE.Mesh(geometry, material);
            p.rotation.x = -0.5 * Math.PI;
            p.receiveShadow = true;
            return p;
        })(new THREE.PlaneGeometry(30, 30, 30), new THREE.MeshLambertMaterial({color: 0xffffff}));

        // Create a spotlight
        this.spotLight = ((sl) => {
            sl.castShadow = true;
            sl.position.set(15, 30, 50);
            return sl;
        })(new THREE.SpotLight(0xffffff));

        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        // Add everything to the scene
        this.scene.add(this.axis);
        this.scene.add(this.cube);
        this.scene.add(this.plane);
        this.scene.add(this.spotLight);
        this.scene.add(this.grid);

        // Setup the gui
        this.guiControls.rotX = 0;
        this.guiControls.rotY = 0;
        this.guiControls.rotZ = 0;
        this.datGUI.add(this.guiControls, 'rotX', 0, 1);
        this.datGUI.add(this.guiControls, 'rotY', 0, 1);
        this.datGUI.add(this.guiControls, 'rotZ', 0, 1);
    }

    // Overwrite the parent update method
    update () {
        this.cube.rotation.x += this.guiControls.rotX;
        this.cube.rotation.y += this.guiControls.rotY;
        this.cube.rotation.z += this.guiControls.rotZ;
        this.controls.update();
    }
}

export { RotatingCube };
