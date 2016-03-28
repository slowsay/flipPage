# flipPage

翻页类 ，经常要用到列表数据，所以写了一个翻页插件<br />
<pre>
var flipPage = require('../js/app/flipPage');
new flipPage('#viewcon', data, 6,{title:['标题0','标题1','标题2']});<br />
</pre>
就这么简单！<br />

Functions
-----------------------------------------------------
*前一页flipPage.toFront<br />
*后一页flipPage.toBack<br />
*列表 flipPage.render<br />
*隔列颜色 flipPage.lineBackground<br />
*页数 flipPage.pageSize<br />
*内容，索引精确定位flipPage.setIndex<br />

Update
------------------------------------------------------
*add select<br />
*add init<br />
*add addPagekind<br />
*add addPagemsg<br />
*add addSelect<br />
*add exchangeDate<br />
*add setIndex<br />

Version 
------------------------------------------------------
v1.0.0 update<br />
v1.0.1 update<br />
v1.0.2 update <br />
v1.0.3 update setZindex <br />
