module.exports = function(grunt) {

  grunt.initConfig({
    appRoot : 'WebContent',
    jsDir: 'WebContent/app/',
    assetsDir: 'WebContent/assets/',
    jsDistDir: 'bower_components/dist/js/',    
    cssDir: 'WebContent/assets/css/',
    cssDistDir: 'bower_components/dist/css/',
    buildDir : 'build',
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      js: {
        options: {
          separator: ';'
        },
        src: [
              	'<%=jsDir%>appConstants.js',
                '<%=jsDir%>*.js', 
                '<%=jsDir%>**/*.js', 
//                '<%=jsDir%>controllers/*.js', 
//                '<%=jsDir%>services/*.js',
//                '<%=jsDir%>custom/menu.js',
//                'middleware/validators/*.js'
            ],
        dest: '<%=jsDistDir%><%= pkg.name %>.js'
      },
      jscomponents: {
        options: {
          separator: ';'
        },
        src: [

                'bower_components/dist/components/angular/angular.min.js',
                'bower_components/dist/components/angular-animate/angular-animate.min.js',
                'bower_components/dist/components/angular-route/angular-route.min.js',
                'bower_components/dist/components/angular-cookies/angular-cookies.min.js',
                'bower_components/dist/components/angular-resources/angular-resources.min.js',
                'bower_components/dist/components/angular-google-gapi/angular-google-gapi.min.js',
                'bower_components/dist/components/angular-translate/angular-translate.min.js',
                'bower_components/dist/components/angular-translate-storage-cookie/angular-translate-storage-cookie.min.js',
                'bower_components/dist/components/angular-translate-storage-local/angular-translate-storage-local.min.js',
                'bower_components/dist/components/angular-translate-loader-static-files/angular-translate-loader-static-files.min.js',                
                'bower_components/dist/components/angular-translate-loader-url/angular-translate-loader-url.min.js',
            ],
        dest: '<%=jsDistDir%><%= pkg.name %>.components.js'
      },
      css: {
        src: ['<%=cssDir%>*.css'],
        dest: '<%=cssDistDir%><%= pkg.name %>.css'
      }
    },
    uglify: {
      options: {
        mangle: false,
        banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
      },
      dist: {
        files: {
          '<%=jsDistDir%><%= pkg.name %>.min.js': ['<%= concat.js.dest %>'],
          '<%=jsDistDir%><%= pkg.name %>.components.min.js': ['<%= concat.jscomponents.dest %>']
        }
      }
    },
    cssmin: {
      add_banner: {
        options: {
          banner: '/*! <%= pkg.name %> <%=grunt.template.today("dd-mm-yyyy") %> */\n'
        },
        files: {
          '<%=cssDistDir%><%= pkg.name %>.min.css': ['<%= concat.css.dest %>']
        }
      }
    },
    watch: {
    files: ['<%=jsDir%>*.js', '<%=cssDir%>*.css'],
    tasks: ['concat', 'uglify', 'cssmin']
    },
    compress: {
        war: {
          options: {
              archive: '<%=buildDir%>/app.war.zip'
          },
          files: [
              {expand: true, cwd: '<%=appRoot%>', src: ['index.html'], dest: '/'},
              {expand: true, cwd: '<%=jsDir%>', src: ['**/*.html'], dest: 'app/'},
              {expand: true, cwd: '<%=jsDistDir%>', src: ['**/*'], dest: 'dist/js/'},
              {expand: true, cwd: '<%=cssDistDir%>', src: ['**/*'], dest: 'dist/css/'},
              {expand: true, cwd: '<%=assetsDir%>/lib/', src: ['others/*','angular/*'], dest: 'assets/lib/'},
              {expand: true, cwd: '<%=assetsDir%>/images', src: ['**/*'], dest: 'assets/images/'},
              {expand: true, cwd: '<%=assetsDir%>/fonts', src: ['**/*'], dest: 'assets/fonts/'},
              {expand: true, cwd: '<%=assetsDir%>/languages', src: ['**/*'], dest: 'assets/languages/'}
          ]
        }
      },
      //rename war.zip to war
      rename: {
          war: {
              files: [
                  {src: ['<%=buildDir%>/app.war.zip'], dest: '<%=buildDir%>/pure-hydration-ng.war'}
              ]
          }
      }
    /*ngAnnotate: {
        options: {
            singleQuotes: true,
        },
        app2: {
            files: [
                {
                    expand: true,
                    src: ['public/scripts/controllers/*.js'],
                    ext: '.js', // Dest filepaths will have this extension.
                    extDot: 'last',       // Extensions in filenames begin after the last dot
                },
            ],
        },
    },*/
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-rename');


  grunt.registerTask('default', [
    'concat',
    'uglify',
    'cssmin',
    'compress',
    'rename'
  ]);
  
};
