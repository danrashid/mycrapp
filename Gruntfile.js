module.exports = function(grunt) {

  grunt.initConfig({
    jade: {
      options: {
        client: true,
        namespace: 'templates',
        processName: function (filename) {
          return filename.match(/^templates\/(.+)\.jade$/)[1];
        }
      },
      files: {
        src: 'templates/*.jade',
        dest: 'public/templates.js'
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
