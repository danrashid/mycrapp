module.exports = function(grunt) {

  grunt.initConfig({
    jade: {
      options: {
        client: true
      },
      files: {
        src: 'templates/*.jade',
        dest: 'public/js/templates.js'
      }
    },
    watch: {
      files: ['<%= jade.files.src %>'],
      tasks: ['jade']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['jade']);

};
