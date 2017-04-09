module.exports = function (grunt) {
    grunt.initConfig({
        nwjs: {
            options: {
                version: '0.21.5',
                buildDir: './build',
//credits: './public/Credits.html',
                macIcns: './app/qiyu.icns', // Path to the Mac icon file
                platforms: ['osx64'],
                flavor: 'normal' //https://github.com/nwjs/nw.js/wiki/Build-Flavors
            },
            src: './app/**/*' // Your NW.js app
        },
        copy: {
            main: {
                files: [
                    {
                        src: 'libs/libffmpeg.dylib',
                        dest: 'build/QiyuMac/osx64/QiyuMac.app/Contents/Versions/57.0.2987.133/nwjs Framework.framework/libffmpeg.dylib',
                        flatten: true
                    }
                ]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-nw-builder');
    grunt.registerTask('default', ['nwjs', 'copy']);
};
