<!--
 * @Author: zhangyu
 * @Email: zhangdulin@outlook.com
 * @Date: 2021-06-28 10:28:16
 * @LastEditors: zhangyu
 * @LastEditTime: 2021-12-16 10:48:38
 * @Description:
-->

### utils

#### jslib-tools

- Description:
  vue 和 常用插件 axios 封装工具类。 前端 js 工具库: 封装常用的工具函数，如日期格式化、浏览器判断等，提高开发效率

- 如何使用:
  直接下载 dist 目录下的 jtools.min.js 使用，支持 UMD 通用模块规范
  使用 npm 安装

1. 浏览器：

```js
<script src="jtools.min.js"></script>
<script>
    var result = jtools.deepCopy({a:1})
</script>
```

2. npm:

```js
npm i jslib-tools
```

3. 全部加载（webpack、RequireJS、SeaJS 等）：

```js
var jtools = require("jslib-tools");
var result = jtools.deepCopy({ a: 1 });
```

4. es6

```js
import jtools from "jslib-tools";
var result = jtools.deepCopy({ a: 1 });
```

- 自动化生成文档
  JSDoc 是一个根据 javascript 文件中注释信息，生成 JavaScript 应用程序或库、模块的 API 文档 的工具。你可以使用他记录如：命名空间，类，方法，方法参数等。类似 JavaDoc 和 PHPDoc。现在很多编辑器或 IDE 中还可以通过 JSDoc 直接或使用插件生成智能提示。从而使开发者很容易了解整个类和其中的属性和方法，并且快速知道如何使用，从而提高开发效率，降低维护成本。 typedoc 是根据 typescript 注释生成的文档

文件 npm run typedoc api-docs: typescript 方法文档

npm run doc docs: js 方法文档

- 扩展
  如果你想添加自己的工具库，在 src 目录创建文件，对应 test 目录添加测试用例，执行 npm run test

  <Gitalk />
