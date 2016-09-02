module.exports = function (grunt) {
    "use strict";
    // Project configuration
    grunt.initConfig({

        // Metadata
        pkg: grunt.file.readJSON("package.json"),
        // Task configuration
        concat: {
            dist: {
                src: ["dist/build/**/*.js"],
                dest: "dist/funk.js"
            }
        },

        uglify: {
            dist: {
                src: "<%= concat.dist.dest %>",
                dest: "dist/funk.min.js"
            }
        },

        jshint: {
            options: {
                node: true,
                curly: true,
                eqeqeq: true,
                immed: true,
                latedef: true,
                newcap: true,
                noarg: true,
                sub: true,
                undef: true,
                unused: true,
                eqnull: true,
                globals: { jQuery: true },
                boss: true,
                esnext: true
            },
            gruntfile: {
                src: "gruntfile.js"
            },
            lib_test: {
                src: ["src/**/*.js", "test/**/*.js"]
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
    grunt.registerTask("default", ["jshint", "babel", "concat"]);
};

