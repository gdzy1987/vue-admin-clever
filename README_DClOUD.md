## 公告

本人已获得 vue-admin-beautiful 原作者授权，并为原作者免费提供了服务器，每天成功抵御 2000 余次恶意攻击，成为 github 贡献者，并在此基础上实现了大幅度优化改进，实现了更人性化的横纵布局方式，致敬 vue-admin-beautiful

## 演示地址

### - [vue-admin-clever 演示地址,菜单移至顶部操作更便捷](http://mpfhrd48.sanxing.uz7.cn/vue-admin-clever)

### - [vue-admin-beautiful 原框架演示地址](http://mpfhrd48.sanxing.uz7.cn/vue-admin-beautiful)

## ☝☝☝ 演示地址,在上方直接点击登录即可！

## 安装

```bash

# 进入项目目录
cd vue-element-admin-clever
# 安装依赖
cnpm i
# 本地开发 启动项目
cnpm run serve
```

# 全局配置

## 环境变量配置，用于配置 api 请求地址

```
.env.development    # 在开发环境中被载入
.env.production     # 在生产环境中被载入
.env.test           # 在测试环境中被载入
```

## setting.js 配置

- 说明：这里有好多你会用到的配置项。
- 位置：src/config/settings.js
- 示例代码：

```js
module.exports = {
  title: "vue-admin-beautiful", //标题
  abbreviation: "vab", //简写
  devPort: "80", //开发环境端口号
  version: "V1.0", //版本号
  copyright: process.env.VUE_APP_AUTHOR,
  routesWhiteList: ["/login", "/404", "/401"], //不经过token校验的路由
  loadingText: "正在加载中...", //加载时显示文字
  tokenName: "accessToken", //token名称
  tokenTableName: "BYUI-VUE-TABLE", //token表名
  storage: "localStorage", //token存储位置
  logo: true, //是否显示logo
  header: "fixed", //固定fixed 不固定noFixed
  layout: "vertical", //横纵布局 horizontal vertical
  themeBar: true, //是否开启主题配置按钮
  tagsView: true, //是否显示多标签页
  contentType: "application/json;charset=UTF-8", //配后端数据的接收方式application/json;charset=UTF-8或者application/x-www-form-urlencoded;charset=UTF-8
  messageDuration: 3000, //消息框消失时间
  requestTimeout: 5000, //最长请求时间
  successCode: 200, //操作正常code
  invalidCode: 402, //登录失效code
  noPermissionCode: 401, //无权限code
  errorLog: ["development", "test", "production"], //是否显示在页面高亮错误
  shieldF12: false, //设置生产环境是否屏蔽f12等开发组工具快捷键
  loginInterception: true, //是否开启登录拦截
  loginRSA: false, //是否开启登录RSA加密
  httpRequestFile: false, //是否依据mock数据生成webstorm HTTP Request请求文件
  authentication: "intelligence", //intelligence和all两种方式，前者后端权限只控制permissions不控制view文件的import（前后端配合，减轻后端工作量），all方式完全交给后端前端只负责加载
};
```

## variables.scss 配置

- 说明：这里可以修改你项目的配色方案，简单修改即可实现风格大变。
- 位置：src/styles/variables.scss

## element-ui 组件尺寸配置

- 说明：这里可以修改你 element-ui 组件尺寸，element-ui 组件的尺寸一共分为 large、default、small 、mini，本项目默认使用的是 small。
- 位置：src/plugins/element.js
- 示例代码：

```js
import Vue from "vue";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/display.css";

import "@/styles/element-variables.scss";

Vue.use(ElementUI, {
  size: "small", // element-ui组件的尺寸一共分为large、default、small 、mini
});
```
