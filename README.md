# flipPage

翻页类 ，经常要用到列表数据，所以写了一个翻页插件<br />
<pre>
var flipPage = require('../js/app/flipPage');
new flipPage('#viewcon', data, 6,{title:['标题0','标题1','标题2']});<br />
</pre>
就这么简单！<br />

Functions
-----------------------------------------------------
<pre>
*前一页flipPage.toFront
*后一页flipPage.toBack
*列表 flipPage.render
*隔列颜色 flipPage.lineBackground
*页数 flipPage.pageSize
*内容，索引精确定位flipPage.setIndex
</pre>

Update
------------------------------------------------------
<pre>
*add select
*add init
*add addPagekind
*add addPagemsg
*add addSelect
*add exchangeDate
*add setIndex
</pre>

Version 
------------------------------------------------------
<pre>
v1.0.0 update
</pre>
