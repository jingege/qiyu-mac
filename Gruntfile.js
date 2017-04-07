module.exports = function(grunt) {

  grunt.initConfig({
    nwjs: {
      options: {
        version: '0.21.5',
        buildDir: './build',
        //credits: './public/Credits.html',
        //macIcns: './icon.icns', // Path to the Mac icon file
        platforms: ['osx64','win32'],
        flavor: 'normal' //https://github.com/nwjs/nw.js/wiki/Build-Flavors
      },
      src: './app/**/*' // Your NW.js app
    },
  });

  grunt.loadNpmTasks('grunt-nw-builder');
  grunt.registerTask('default', ['nwjs']);
};
