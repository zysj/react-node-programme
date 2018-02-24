


// define(['jquery'],
//     function(jquery){
//         console.log(jquery);
//         return 'testutil'
// })

(function(factory,global,$){
    if(typeof define == 'function' && define.amd )define('testutil',factory.bind(null,global,$));
})(function(global,$){

    console.log($,$('a'));
    return 'testutil'
},window,window.jQuery);
