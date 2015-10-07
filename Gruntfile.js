module.exports = function (grunt) {
    grunt.initConfig({
        browserify: {
            dist: {
                options: {
                    transform: [
                        ["babelify", {
                            loose: "all"
                        }]
                    ]
                },
                files: {
                    "./dist/bundle.js": ["./modules/index.js"]
                }
            }
        },
        watch: {
            scripts: {
                files: ["./modules/*.js", "./modules/examples/*.js", "./modules/util/*.js"],
                tasks: ["browserify"]
            }
        },
    });

    grunt.loadNpmTasks("grunt-browserify");
    grunt.loadNpmTasks("grunt-contrib-watch");

    grunt.registerTask("default", ["watch"]);
    grunt.registerTask("build", ["browserify"]);
};
