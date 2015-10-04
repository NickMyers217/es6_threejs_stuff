'use strict';

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var THREE = require('three');

var Game = (function () {
    function Game() {
        _classCallCheck(this, Game);

        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.renderer = (function () {
            var r = new THREE.WebGLRenderer();

            r.setSize(window.innerWidth, window.innerHeight);
            document.body.appendChild(r.domElement);

            return r;
        })();
        this.cube = (function () {
            var geometry = new THREE.BoxGeometry(1, 1, 1),
                material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });

            return new THREE.Mesh(geometry, material);
        })();
        this.scene.add(this.cube);
        this.camera.position.z = 5;
    }

    _createClass(Game, [{
        key: 'update',
        value: function update() {
            this.cube.rotation.x += 0.1;
            this.cube.rotation.y += 0.1;
        }
    }, {
        key: 'render',
        value: function render() {
            this.renderer.render(this.scene, this.camera);
        }
    }, {
        key: 'run',
        value: function run() {
            var _this = this;

            this.update();
            this.render();
            requestAnimationFrame(function () {
                return _this.run();
            });
        }
    }]);

    return Game;
})();

window.onload = function () {
    var g = new Game();
    g.run();
};
