import { Util } from '../util/util.js';
const THREE = require('three'),
      dat = require('dat-gui'),
      Stats = require('stats-js');

// A base class for an example scene
class Example {
    constructor () {
        // The renderer for the scene
        this.renderer = ((r) => {
            r.setClearColor(0x0000aa);
            r.setSize(window.innerWidth, window.innerHeight);
            r.shadowMap.enabled = true;
            r.shadowMapSoft = true;
            document.body.appendChild(r.domElement);
            return r;
        })(new THREE.WebGLRenderer());

        // The empty scene
        this.scene = new THREE.Scene();

        // The camera
        this.camera = ((c) => {
            c.position.set(40, 40, 40);
            c.lookAt(this.scene.position);
            return c;
        })(new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 1000));

        // dat.GUI
        this.guiControls = {};
        this.datGUI = new dat.GUI();

        // Stat.js fps monitor
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
    }

    render () {
        this.stats.begin();

        this.update();
        this.renderer.render(this.scene, this.camera);
        requestAnimationFrame(() => this.render());

        this.stats.end();
    }

    run () {
        requestAnimationFrame(() => this.render());
    }
}

export { Example };
