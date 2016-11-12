
module.exports = function (grunt) {
    "use strict";
    // Project configuration
    grunt.initConfig({
        
        app: {
            scripts: [
                "lib/index.js",
                "lib/**/*.js"
            ]
        },

        // Metadata
        pkg: grunt.file.readJSON("package.json"),
        // Task configuration
        concat: {
            dist: {
                src: ["dist/compiled/index.js", "dist/compiled/**/*.js"],
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
                    cwd: "lib/",
                    src: ["**/*.js"],
                    dest: "dist/compiled"
                }]
            }
        },

        strictly: {
            files: ["lib/**/*.js"]
        },
        
        clean: ["dist/**/*"],
        
    
        jsdoc: {
            dist: {
                src: ["lib/README.md", "lib/**/*.js"],
                options: {
                    destination: "../funk-docs/",
                    template: "node_modules/minami"
                }
            }
        },
        
        includeSource: {
            
            options: {
                basepath: "lib/",
                baseUrl: "",
                ordering: "",
                rename: function (dest, match, options) {
                    return "../" + match;
                }
            },
            
            target: {
                files: {
                    "test/index.html" : "test/index.html"
                }
            }
        }
        
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks("grunt-contrib-concat");
    grunt.loadNpmTasks("grunt-contrib-uglify");
    grunt.loadNpmTasks("grunt-contrib-nodeunit");
    grunt.loadNpmTasks("grunt-contrib-jshint");
    grunt.loadNpmTasks("grunt-contrib-watch");
    grunt.loadNpmTasks("grunt-contrib-clean");
    grunt.loadNpmTasks("grunt-babel");
    grunt.loadNpmTasks("strictly");
    grunt.loadNpmTasks("grunt-jsdoc");
    grunt.loadNpmTasks("grunt-include-source");

    // Default task
    grunt.registerTask("default", ["clean", "babel", "concat", "uglify"]);
};

