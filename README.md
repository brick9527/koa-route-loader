# koa-route-loader

## 开发环境

建议开发环境:
- Node >= 10.x
- Koa >= 2.x
- koa-router >= 10.x

推荐使用koa仓库下的[koa-router](https://github.com/koajs/router).
## 安装

```sh
npm i koa-route-loader -S
```

## 使用(Usage)

与Koa2框架一并使用.

```js
const Koa = require('koa');
const Router = require('@koa/router');
const path = require('path');
const koaRouteLoader = require('koa-route-loader');

const app = new Koa();
const router = new Router();

koaRouteLoader(app, router, {
  entryPoint: path.join(__dirname, 'routes'),
});

app.listen(3000);
```

详细使用方法请参见[example](./examples/koa_sample/index.js).

## 参数列表

|参数名|类型|必须|说明|
|-|-|-|-|
|entryPoint|String|√|项目路由文件夹的位置. 建议自行根据项目文件位置使用`__dirname`进行设置|
|prefix|String|×|所有路由的前缀.例如`api`, 将会在所有路由前加上`/api`. 默认值: `api`|
|debug|String|×|是否开启debug模式. 开启debug模式后, 内部运行日志将会由你指定的方式进行输出|
|stdout|Function|×|**开启debug模式后**, 内部运行日志的输出方式|
|stderr|Function|×|**开启debug模式后**, 内部运行错误的输出方式|

## 代码提交规范(Commit Message Standard)

提交commit时遵循以下规范:

- feat：提交新功能
- fix：修复了bug
- docs：只修改了文档
- style：调整代码格式，未修改代码逻辑（比如修改空格、格式化、缺少分号等）
- refactor：代码重构，既没修复bug也没有添加新功能
- perf：性能优化，提高性能的代码更改
- test：添加或修改代码测试
- chore：对构建流程或辅助工具和依赖库（如文档生成等）的更改
- revert: 回滚


## 待做(TODO)

- [x] 添加测试覆盖率
- [x] 完善测试用例
- [x] 完善README.md文档
- [ ] 发布`0.1.0`版本
- [ ] 添加github action