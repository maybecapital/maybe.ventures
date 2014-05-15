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
    aws: grunt.file.readJSON('aws.json'),
    aws_s3: {
      options: {
        accessKeyId: '<%= aws.AWSAccessKeyId %>', // Use the variables
        secretAccessKey: '<%= aws.AWSSecretKey %>', // You can also use env variables
        region: 'eu-west-1',
        uploadConcurrency: 5, // 5 simultaneous uploads
        downloadConcurrency: 5 // 5 simultaneous downloads
      },
      production: {
        options: {
          bucket: 'maybe.ventures'
          params: {
            ContentEncoding: 'gzip' // applies to all the files!
          }
        },
        files: [
          //{expand: true, cwd: '', src: ['**'], dest: 'app/'},
    },
  },
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

  grunt.registerTask('deploy', [
    'aws_s3'
  ]);
};
