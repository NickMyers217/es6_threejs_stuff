const THREE = require('three');

class Game {
    constructor () {
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
        this.renderer = (() => {
            let r = new THREE.WebGLRenderer();

            r.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(r.domElement);

            return r;
        })();
        this.cube = (() => {
            let geometry = new THREE.BoxGeometry(1, 1, 1),
            material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

            return new THREE.Mesh(geometry, material);
        })();
        this.scene.add(this.cube);
        this.camera.position.z = 5;
    }

    update () {
        this.cube.rotation.x += 0.1;
        this.cube.rotation.y += 0.1;
    }

    render () {
        this.renderer.render(this.scene, this.camera);
    }

    run () {
        this.update();
        this.render();
        requestAnimationFrame(() => this.run());
    }
}


window.onload = () => {
    let g = new Game(); 
    g.run();
};
