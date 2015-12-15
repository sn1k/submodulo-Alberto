'use strict';

module.exports = function(grunt) {

  // Configuración del proyecto
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  docco: {
      debug: {
      src: ['*.js'],
      options: {
          output: 'docs/'
      }
      }
  }
  });

  // Cargamos grunt
  grunt.loadNpmTasks('grunt-docco');

  // Generamos la documentacion
  grunt.registerTask('default', ['docco']);
};
