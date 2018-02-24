
require.config({
    baseUrl:'./js',
    paths:{
        'jquery':'jquery.min',
        'testutil':'testutil'
    },
    shim:{
        'testutil':{
            deps:['jquery']
        }
    },
});
require(['jquery','testutil'],function(jquery,testutil){
    console.log(jquery,testutil);
    $('iframe').attr('src','./child.html');
})