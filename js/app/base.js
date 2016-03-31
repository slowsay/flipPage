/**
 * @author slowsay
 * @description 翻页功能
 */
define(function(require) {
    var _wid = $(window).width(), _hei = $(window).height();
    var data = [{
        id : 'A061-2016-02-0001',
        title : 'jack',
        time : '12',
        url : 'www.163.com'
    }, {
        id : 1,
        title : 'jack',
        time : '12',
        url : ''
    }, {
        id : 2,
        title : 'jack',
        time : '12',
        url : ''
    }, {
        id : 3,
        title : 'jack',
        time : '12',
        url : ''
    }, {
        id : 4,
        title : 'jack',
        time : '12',
        url : ''
    }, {
        id : 5,
        title : 'jack',
        time : '12',
        url : ''
    }, {
        id : 6,
        title : 'jack',
        time : '12',
        url : ''
    }, {
        id : 7,
        title : 'slowsay',
        time : '12',
        url : ''
    }, {
        id : 8,
        title : 'pp',
        time : '12',
        url : ''
    }, {
        id : 9,
        title : 'ww',
        time : '12',
        url : ''
    }, {
        id : 10,
        title : 'dd',
        time : '12',
        url : ''
    }, {
        id : 'A061-2016-02-0001',
        title : 'jack',
        time : '12',
        url : ''
    }, {
        id : 1,
        title : 'jack',
        time : '12',
        url : ''
    }, {
        id : 2,
        title : 'jack',
        time : '12',
        url : ''
    }];
    /**
     * @method 翻页功能
     */
    var flipPage = require('flipPage');
    $('body').append('<div id=viewcon></div><div id=viewcon2></div>');
    var _pp = new flipPage('#viewcon', data, 6,{title:['索引号','标题','时间']});
    var _kk = new flipPage('#viewcon2', data,3, {title:['索引号','标题','时间']});

});
