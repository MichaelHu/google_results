(function(){

/**
 * 添加外链脚本的方式，某些浏览器(chrome)下存在被block的问题
 * 这些浏览器，则使用inline的方式
 */
var script = document.createElement('script');
script.src = 'http://258i.com/webtools/google-results/main.js';
script.charset = 'utf-8';
document.getElementsByTagName('head')[0]
    .appendChild(script);

})();

