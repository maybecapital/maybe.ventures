'use strict';

module.exports = function (grunt) {
  require('load-grunt-tasks')(grunt);
  require('time-grunt')(grunt);

  // configurable paths
  var yeomanConfig = {
    app: 'app',
    dist: 'dist'
  };

  try {
    yeomanConfig.app = require('./bower.json').appPath || yeomanConfig.app;
  } catch (e) {}

  grunt.initConfig({
    yeoman: yeomanConfig,
    connect: {
      server: {
        options: {
          debug: true,
          livereload: true,
          port: 9000
        }
      }
    }
  });

  grunt.registerTask('server', [
    'connect:server:keepalive'
  ]);
};
