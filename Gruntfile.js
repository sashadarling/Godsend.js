module.exports = function(grunt) {

	var libs = ['js/Godsend.js'];

	grunt.initConfig({

		pkg: grunt.file.readJSON('package.json'),

		clean : ["lib/*"],

		uglify : {
			options : {
				banner : '/*! <%= pkg.name %> - <%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			release : {
				files : {
					'lib/Godsend.min.js' : libs
				}
			}
		},

		"git-describe" : {
			"options" : {
				prop : "git-version"
			}
		},

		jshint : {
			all : [ 'Gruntfile.js', 'js/*.js']
		},

		watch: {
			files: ['<%= jshint.files %>'],
			tasks: 'default'
		}

	});

	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-git-describe');
	grunt.loadNpmTasks('grunt-contrib-jshint');

	grunt.registerTask('default', ['jshint','git-describe', 'clean', 'uglify']);

};
