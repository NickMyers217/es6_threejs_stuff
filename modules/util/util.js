const Util = {
    resize: (threeScene) => {
        window.addEventListener('resize', () => {
            threeScene.camera.aspect = window.innerWidth / window.innerHeight;  
            threeScene.camera.updateProjectionMatrix();
            threeScene.renderer.setSize(window.innerWidth, window.innerHeight);
        }, false);
    }
};

export { Util };
