import { BaseScene } from './BaseScene.js';

const THREE = require('three'),
      dat = require('dat-gui'),
      Stats = require('stats-js'),
      OrbitControls = require('three-orbit-controls')(THREE);

// A simple scene that can be used as a template
class Template extends BaseScene {
    constructor () {
        // Call the parent constructor
        super();

        // Add a light
        this.light = ((l) => {
            l.position.set(100, 250, 100);
            return l;
        })(new THREE.PointLight(0xffffff));

        // Create a textured plane for the floor
        this.floor = (() => {
            // Remember that filepaths to images are relative to the BUNDLE NOT THIS FILE!
            let floorTex = new THREE.ImageUtils.loadTexture('../res/images/checkerboard.jpg');
            floorTex.wrapS = floorTex.wrapT = THREE.RepeatWrapping;
            floorTex.repeat.set(10, 10);
            
            let mat = new THREE.MeshBasicMaterial({ map: floorTex, side: THREE.DoubleSide }),
                geo = new THREE.PlaneGeometry(1000, 1000, 10, 10),
                floor = new THREE.Mesh(geo, mat);

            floor.position.y = -0.5;
            floor.rotation.x = Math.PI / 2;

            return floor;
        })();

        // Create a sphere
        this.sphere = ((geo, mat) => {
            let sphere = new THREE.Mesh(geo, mat);

            sphere.position.set(0, 40, 0);

            return sphere;
        })(new THREE.SphereGeometry(30, 32, 16), new THREE.MeshLambertMaterial({ color: 0x000088 }));

        // Controls
        this.controls = new OrbitControls(this.camera, this.renderer.domElement);

        // Add everything to the scene
        this.scene.add(this.light);
        this.scene.add(this.floor);
        this.scene.add(this.sphere);

        // Move the camera to the correct starting position and direction
        this.camera.position.set(0, 150, 400);
        this.camera.lookAt(this.scene.position);
    }

    // Overwrite the parent update method
    update () {
        this.controls.update();
    }
}

export { Template };
