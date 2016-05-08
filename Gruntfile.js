module.exports = function (grunt) {
    'use strict';
    // Project configuration
    grunt.initConfig({

        // Metadata
        pkg: grunt.file.readJSON('package.json'),

        banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
            '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
            '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
            '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
            ' Licensed <%= pkg.license %> */\n',

        // Task configuration
        concat: {
            options: {
                banner: '<%= banner %>',
                stripBanners: true
            },
            dist: {
                src: ['dist/build/**/*.js'],
                dest: 'dist/funk.js'
            }
        },

        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            dist: {
                src: '<%= concat.dist.dest %>',
                dest: 'dist/funk.min.js'
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
                src: 'gruntfile.js'
            },
            lib_test: {
                src: ['src/**/*.js', 'test/**/*.js']
            }
        },

        nodeunit: {
            files: ['test/**/*_test.js']
        },

        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            lib_test: {
                files: '<%= jshint.lib_test.src %>',
                tasks: ['jshint:lib_test', 'nodeunit']
            }
        },

        babel: {
            options: {
                presets: ['es2015'],
                sourceMap: false
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'src/',
                    src: ['**/*.js'],
                    dest: 'dist/build/'
                }]
            }
        }
    });

    // These plugins provide necessary tasks
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-babel');

    // Default task
    grunt.registerTask('default', ['jshint', 'babel', 'concat']);
};

