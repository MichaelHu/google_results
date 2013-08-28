(function(){
 
/*
$('#ires a').each(function(index, item){
    if(/\/url\?/item.href);
});
*/

var h3s = document.getElementById('ires').getElementsByTagName('h3'),
    h3,
    links, 
    link,
    p,
    tip;

for(var i=0; i<h3s.length; i++){
    h3 = h3s[i];
    p = h3.parentNode;
    p.style.position = 'relative';
    links = h3.getElementsByTagName('a');
    for(var j=0; j<links.length; j++){
        link = links[j];

        tip = document.createElement('div');

        with(tip.style){
            width = '50px';
            height = '26px';
            top = '0';
            left = '-55px';
            backgroundColor = 'yellow';
            position = 'absolute';
            zIndex = '1000';
            borderRadius = '4px';
            border = '1px solid green';
            textAlign = 'center';
        }

        tip.innerHTML = [
            '<a target="_blank" href="'

            // ie6: http://www.google.com.hk/url?q=http://v.ifeng.com/v/pengliyuan/index.shtml&sa=U&ei=AhlxUd--JMXrlAWzx4CICg&ved=0CB0QFjAA&usg=AFQjCNEoblT7zErDY9OHuPA-4t0csMaxVA
            // other: http://www.google.com.hk/url?sa=t&rct=j&q=&esrc=s&frm=1&source=web&cd=1&cad=rja&ved=0CDIQFjAA&url=%68%74%74%70%3a%2f%2f%76%2e%69%66%65%6e%67%2e%63%6f%6d%2f%76%2f%70%65%6e%67%6c%69%79%75%61%6e%2f%69%6e%64%65%78%2e%73%68%74%6d%6c&ei=7BhxUffbAYeIkwXZv4GABg&usg=AFQjCNG6gGx0KHWoCH4zGIlK3LfN4w2gSg
            ,   /google[^\/]+\/url\?q=([^&]+)/i.test(link.href) 
                    ? decodeURIComponent(RegExp.$1) 
                    : /google[^\/]+\/url\?.+&url=([^&]+)/i.test(link.href)
                        ? decodeURIComponent(RegExp.$1) 
                        : link.href

            ,'" style="'
            ,   'display:block;'
            ,   'width:100%;'
            ,   'height:100%;'
            ,   'text-decoration:none;'
            ,   'color:green;'
            ,   'font:normal 12px/26px normal;'

            // @note: unicode: "走你"
            ,'">\u8D70\u4F60</a>'
        ].join('');

        p.appendChild(tip);
    }
}

})();

