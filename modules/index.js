import {Util} from './util/util.js';
const THREE = require('three'),
      dat = require('dat-gui');

class Example {
    constructor () {
        this.renderer = (() => {
            let r = new THREE.WebGLRenderer();
            r.setClearColor(0x4444ff);
            r.setSize(window.innerWidth, window.innerHeight);
            r.shadowMap.enabled = true;
            r.shadowMapSoft = true;
            document.body.appendChild(r.domElement);
            return r;
        })();
        this.axis = new THREE.AxisHelper(10);
        this.grid = (() => {
            let g = new THREE.GridHelper(50, 5);
            g.setColors(new THREE.Color("rgb(255,0,0)"), 0x000000);
            return g;
        })();
        this.cube = (() => {
            let geometry = new THREE.BoxGeometry(5, 5, 5),
            material = new THREE.MeshLambertMaterial({color: 0x33ff00}),
            c = new THREE.Mesh(geometry, material);
            c.position.x = 2.5;
            c.position.y = 4;
            c.position.z = 2.5;
            c.castShadow = true;
            return c;
        })();
        this.plane = (() => {
            let geometry = new THREE.PlaneGeometry(30, 30, 30),
            material = new THREE.MeshLambertMaterial({color: 0xffffff}),
            p = new THREE.Mesh(geometry, material);
            p.rotation.x = -0.5 * Math.PI;
            p.receiveShadow = true;
            return p;
        })();
        this.spotLight = (() => {
            let sl = new THREE.SpotLight(0xffffff);
            sl.castShadow = true;
            sl.position.set(15, 30, 50);
            return sl;
        })();
        this.scene = (() => {
            let s = new THREE.Scene();
            s.add(this.axis);
            s.add(this.cube);
            s.add(this.plane);
            s.add(this.spotLight);
            s.add(this.grid);
            return s;
        })();
        this.camera = (() => {
            let c = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000);
            c.position.set(40, 40, 40);
            c.lookAt(this.scene.position);
            return c;
        })();
        this.guiControls = {
            rotX: 0,
            rotY: 0,
            rotZ: 0
        };
        this.datGUI = (() => {
            let g = new dat.GUI();
            g.add(this.guiControls, 'rotX', 0, 1);
            g.add(this.guiControls, 'rotY', 0, 1);
            g.add(this.guiControls, 'rotZ', 0, 1);
            return g;
        })();
    }

    update () {
        this.cube.rotation.x += this.guiControls.rotX;
        this.cube.rotation.y += this.guiControls.rotY;
        this.cube.rotation.z += this.guiControls.rotZ;
    }

    render () {
        this.update();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.render());
    }

    run () {
        requestAnimationFrame(() => this.render());
    }
}

window.onload = () => {
    let ex = new Example();
    Util.resize(ex);
    ex.run();
};
