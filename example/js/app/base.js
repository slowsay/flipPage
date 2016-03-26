/**
 * @author slowsay
 * @description 翻页功能
 */
define(function(require) {
    var _wid = $(window).width(), _hei = $(window).height();
    var data = [{
        id : 0,
        title : 'jack',
        time : '12'
    }, {
        id : 0,
        title : 'jack',
        time : '12'
    }, {
        id : 0,
        title : 'jack',
        time : '12'
    }, {
        id : 0,
        title : 'jack',
        time : '12'
    }, {
        id : 0,
        title : 'jack',
        time : '12'
    }, {
        id : 0,
        title : 'jack',
        time : '12'
    }, {
        id : 0,
        title : 'jack',
        time : '12'
    }, {
        id : 1,
        title : 'slowsay',
        time : '12'
    }, {
        id : 2,
        title : 'pp',
        time : '12'
    }, {
        id : 3,
        title : 'ww',
        time : '12'
    }, {
        id : 4,
        title : 'dd',
        time : '12'
    }];
    /**
     * @method 翻页功能
     */
    var flipPage = require('flipPage');
    $('body').append('<div id=viewcon></div><div id=viewcon2></div>');
    var _pp = new flipPage('#viewcon', data, 6,{title:['标题0','标题1','标题2']});
 

});
