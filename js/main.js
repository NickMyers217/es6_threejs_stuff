const THREE = require('three');
const dat = require('dat-gui');

window.onload = () => {
    let renderer = (() => {
            let r = new THREE.WebGLRenderer();
            r.setClearColor(0xdddddd);
            r.setSize(window.innerWidth, window.innerHeight);
            r.shadowMap.enabled = true;
            r.shadowMapSoft = true;
            document.body.appendChild(r.domElement);
            return r;
        })(),
        axis = new THREE.AxisHelper(10),
        grid = (() => {
            let g = new THREE.GridHelper(50, 5);
            g.setColors(new THREE.Color("rgb(255,0,0)"), 0x000000);
            return g;
        })(),
        cube = (() => {
            let geometry = new THREE.BoxGeometry(5, 5, 5),
                material = new THREE.MeshLambertMaterial({color: 0xff3300}),
                c = new THREE.Mesh(geometry, material);
            c.position.x = 2.5;
            c.position.y = 4;
            c.position.z = 2.5;
            c.castShadow = true;
            return c;
        })(),
        plane = (() => {
            let geometry = new THREE.PlaneGeometry(30, 30, 30),
                material = new THREE.MeshLambertMaterial({color: 0xffffff}),
                p = new THREE.Mesh(geometry, material);
            p.rotation.x = -0.5 * Math.PI;
            p.receiveShadow = true;
            return p;
        })(),
        spotLight = (() => {
            let sl = new THREE.SpotLight(0xffffff);
            sl.castShadow = true;
            sl.position.set(15, 30, 50);
            return sl;
        })(),
        scene = (() => {
            let s = new THREE.Scene();
            s.add(axis);
            s.add(cube);
            s.add(plane);
            s.add(spotLight);
            s.add(grid);
            return s;
        })(),
        camera = (() => {
            let c = new THREE.PerspectiveCamera(45, window.innerHeight/window.innerHeight, 0.1, 1000);
            c.position.set(40, 40, 40);
            c.lookAt(scene.position);
            return c;
        })(),
        guiControls = {
            rotX: 0,
            rotY: 0,
            rotZ: 0
        },
        datGUI = (() => {
            let g = new dat.GUI();
            g.add(guiControls, 'rotX', 0, 1);
            g.add(guiControls, 'rotY', 0, 1);
            g.add(guiControls, 'rotZ', 0, 1);
            return g;
        })();
    
    let render = function () {
        cube.rotation.x += guiControls.rotX;
        cube.rotation.y += guiControls.rotY;
        cube.rotation.z += guiControls.rotZ;
        renderer.render(scene, camera);
        requestAnimationFrame(render);
    };

    requestAnimationFrame(render);
};
