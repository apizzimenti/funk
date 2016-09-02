
module.exports = function (grunt) {
    "use strict";
    // Project configuration
    grunt.initConfig({

        // Metadata
        pkg: grunt.file.readJSON("package.json"),
        // Task configuration
        concat: {
            dist: {
                src: ["dist/compiled/**/*.js"],
                dest: "dist/funk.js"
            }
        },

        uglify: {
            dist: {
                src: "<%= concat.dist.dest %>",
                dest: "dist/funk.min.js"
            }
        },

        babel: {
            options: {
                presets: ["es2015"],
                sourceMap: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: "src/",
                    src: ["**/*.js"],
                    dest: "dist/compiled"
                }]
            }
        },

        strictly: {
            files: ["src/**/*.js"]
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("strictly");

    // Default task
    grunt.registerTask("strictly", ["strictly"]);
    grunt.registerTask("default", ["babel", "concat", "uglify"]);
};

