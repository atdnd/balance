/*global module:false*/
module.exports = function(grunt) {

  function log(err, stdout, stderr, cb) {
    console.log(stdout);
    cb();
  }

  // Load grunt config
  require('load-grunt-config')(grunt, {
    jitGrunt: true
  });

};
