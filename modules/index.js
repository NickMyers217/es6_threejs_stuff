import { THREEx } from './util/threex.js';
import { Template as ExScene } from './examples/Template.js';

window.onload = () => {
    let ex = new ExScene();
    THREEx.WindowResize(ex.renderer, ex.camera);
    THREEx.FullScreen.bindKey();
    ex.run();
};
