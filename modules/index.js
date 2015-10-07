import { THREEx } from './util/threex.js';
import { RotatingCube } from './examples/rotating_cube.js';

window.onload = () => {
    let ex = new RotatingCube();
    THREEx.WindowResize(ex.renderer, ex.camera);
    THREEx.FullScreen.bindKey();
    ex.run();
};
