# IncludeJS
无后端开发模板插件，在编写html模板时，经常会写死header和footer，因为我们无法像在php中使用include、也无法像thymeleaf中使用repalce那样载入一些通用的模板。目前通常的做法是使用jQuery的load函数进行加载（用法下面有示例），但是对于不使用jQuery的项目来说，未免有点小题大做了，于是想着自己来写一个工具类，真上手写了以后发现实在是太简单了。

## 教程：
在新建一共header.html，写入header的代码
在index.html或者其它html中引入只需要写一个 **include** 标签，然后data的属性值为要引入的html的地址：
```html
<include data="header.html"></include>
```
在html的最后引用Include.js：
```html
<script src="https://cdn.jsdelivr.net/gh/xuxinyuancode/IncludeJS@v1.0/Include.js"></script>
```