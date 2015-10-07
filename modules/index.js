import { THREEx } from './util/threex.js';
import { RotatingCube } from './examples/rotating_cube.js';

const THREE = require('three'),
      dat = require('dat-gui'),
      Stats = require('stats-js');

window.onload = () => {
    let ex = new RotatingCube();
    THREEx.WindowResize(ex.renderer, ex.camera);
    THREEx.FullScreen.bindKey();
    ex.run();
};
