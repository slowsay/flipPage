/**
 * @author Administrator
 */
require.config({
    waitSeconds : 50,
    baseUrl : 'js',
    paths : {
        jquery : 'lib/jquery',
        flipPage : 'lib/flipPage',
        /*
         * @model page
         */
        base : 'app/base'
    },
    shim : {
        base : ['jquery']
    }
});
require(['base'], function(a) {
    //todo
});

