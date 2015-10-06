import {Util} from './util/util.js';
const THREE = require('three'),
      dat = require('dat-gui'),
      Stats = require('stats-js');

class Example {
    constructor () {
        this.renderer = ((r) => {
            r.setClearColor(0x0000aa);
            r.setSize(window.innerWidth, window.innerHeight);
            r.shadowMap.enabled = true;
            r.shadowMapSoft = true;
            document.body.appendChild(r.domElement);
            return r;
        })(new THREE.WebGLRenderer());

        this.axis = new THREE.AxisHelper(10);

        this.grid = ((g) => {
            g.setColors(new THREE.Color("rgb(255,0,0)"), 0x000000);
            return g;
        })(new THREE.GridHelper(50, 5));

        this.cube = ((geometry, material) => {
            let c = new THREE.Mesh(geometry, material);
            c.position.x = 2.5;
            c.position.y = 4;
            c.position.z = 2.5;
            c.castShadow = true;
            return c;
        })(new THREE.BoxGeometry(5, 5, 5), new THREE.MeshLambertMaterial({color: 0x33ff00}));

        this.plane = ((geometry, material) => {
            let p = new THREE.Mesh(geometry, material);
            p.rotation.x = -0.5 * Math.PI;
            p.receiveShadow = true;
            return p;
        })(new THREE.PlaneGeometry(30, 30, 30), new THREE.MeshLambertMaterial({color: 0xffffff}));

        this.spotLight = ((sl) => {
            sl.castShadow = true;
            sl.position.set(15, 30, 50);
            return sl;
        })(new THREE.SpotLight(0xffffff));

        this.scene = ((s) => {
            s.add(this.axis);
            s.add(this.cube);
            s.add(this.plane);
            s.add(this.spotLight);
            s.add(this.grid);
            return s;
        })(new THREE.Scene());

        this.camera = ((c) => {
            c.position.set(40, 40, 40);
            c.lookAt(this.scene.position);
            return c;
        })(new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000));

        this.guiControls = {
            rotX: 0,
            rotY: 0,
            rotZ: 0
        };

        this.datGUI = ((g) => {
            g.add(this.guiControls, 'rotX', 0, 1);
            g.add(this.guiControls, 'rotY', 0, 1);
            g.add(this.guiControls, 'rotZ', 0, 1);
            return g;
        })(new dat.GUI());

        this.stats = ((s) => {
            s.setMode(0);
            s.domElement.style.position = 'absolute';
            s.domElement.style.left = '0px';
            s.domElement.style.top = '0px';
            document.body.appendChild(s.domElement);
            return s;
        })(new Stats());
    }

    update () {
        this.cube.rotation.x += this.guiControls.rotX;
        this.cube.rotation.y += this.guiControls.rotY;
        this.cube.rotation.z += this.guiControls.rotZ;
    }

    render () {
        this.stats.begin();

        this.update();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.render());

        this.stats.end();
    }

    run () {
        console.log(this.renderer);
        requestAnimationFrame(() => this.render());
    }
}

window.onload = () => {
    let ex = new Example();
    Util.resize(ex);
    ex.run();
};
