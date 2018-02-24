
var gulp = require('gulp');

var replace = require('gulp-replace');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var rjs = require('requirejs');


gulp.task('copyToModules',function(){
    return gulp.src(['index.js'])
        .pipe(gulp.dest('js/'));
})

gulp.task('mini:js',['copyToModules'],function(cd){
    rjs.optimize({
        baseUrl:'js',
        dir:'dist',
        optimize:'uglify',
        optimizeCss:'standard',
        removeCombined:true,
        preserveLicenseComments:false,
        mainConfigFile:'index.js',
        modules:[
            {
                name:'index'
            }
        ],
        uglify:{
            no_mangle: true   //混淆变量名
        },
        findNestedDependencies:true,
        include:['require'],
        logLevel:1
    },function(buildResponse){
        gulp.src(['dist/index.js'])
        .pipe(rename({extname:'.min.js'}))
        .pipe(gulp.dest('./'));

        gulp.src(['mini/main.js'])
        .pipe(clean());

        gulp.src(['dist','mini'],{read:false})
        .pipe(clean());
    })
});

gulp.task('default',['mini:js'],function(){

});
