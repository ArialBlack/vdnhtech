module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
    
        less: {
            development: {
                options: {
                    paths: ['less'],
                    compress: false,
                    cleancss: true,
                    dumpLineNumbers: 'comments'
                },
                files: {
                    '../themes/vdnh_ui/css/style.css': '../themes/vdnh_ui/less/style.less'
                }
            }
        },

        watch: {
            grunt: {
                files: ['Gruntfile.js']
            },

            less: {
                files: [
                    '../themes/vdnh_ui/less/**/*.less'
                ],
                tasks: ['less', 'postcss']
            },

        },
        
        postcss: {
            options: {
              processors: [
                require('autoprefixer')({browsers: ['last 2 versions', 'ie 10']}),
              ]
            },
            dist: {
              src: '../themes/vdnh_ui/css/style.css'
            }
        },
        
    });

    // load npm modules
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-postcss');

    // register tasks
    grunt.registerTask('default', ['less', 'postcss', 'watch']);
    grunt.registerTask('jenkins', ['less', 'postcss']);
};
