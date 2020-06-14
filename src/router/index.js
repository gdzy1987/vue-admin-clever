import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";
import EmptyLayout from "@/layouts/EmptyLayout";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/redirect",
    component: Layout,
    hidden: true,
    children: [
      {
        path: "/redirect/:path(.*)",
        component: () => import("@/views/redirect/index"),
      },
    ],
  },
];

/*当settings.js里authentication配置的是intelligence时，views引入交给前端配置*/
export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    meta: {
      title: "首页",
      icon: "home",
    },
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("@/views/index/index"),
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
        },
      },
    ],
  },
  {
    path: "/image",
    component: () => import("@/views/vab/word/image"),
    hidden: true,
  },
  /* {
    path: "/test",
    component: Layout,
    redirect: "noRedirect",
    children: [
      {
        path: "test",
        name: "Test",
        component: () => import("@/views/test/index"),
        meta: {
          title: "test",
          icon: "marker",
          permissions: ["admin", "test"],
        },
      },
    ],
  }, */
  {
    path: "/mall",
    component: Layout,
    redirect: "noRedirect",
    name: "Mall",
    meta: {
      title: "商城模板",
      icon: "shopping-cart",
      permissions: ["admin"],
    },
    alwaysShow: true,

    children: [
      {
        path: "pay",
        name: "Pay",
        component: () => import("@/views/mall/pay/index"),
        meta: {
          title: "支付",
          noKeepAlive: true,
        },
        children: null,
      },
      {
        path: "goodsList",
        name: "GoodsList",
        component: () => import("@/views/mall/goodsList/index"),
        meta: {
          title: "商品列表",
        },
      },
      {
        path: "goodsDetail",
        name: "GoodsDetail",
        component: () => import("@/views/mall/goodsDetail/index"),
        meta: {
          title: "商品详情",
        },
      },
    ],
  },
  {
    path: "/vab",
    component: Layout,
    redirect: "noRedirect",
    name: "Vab",
    meta: { title: "组件", icon: "cloud" },
    alwaysShow: true,
    children: [
      {
        path: "permission",
        name: "Permission",
        component: () => import("@/views/vab/permission/index"),
        meta: {
          title: "权限控制",
          permissions: ["admin", "editor", "test"],
        },
      },
      {
        path: "menu1",
        component: () => import("@/views/vab/nested/menu1/index"),
        name: "Menu1",
        meta: {
          title: "嵌套路由 1",
          permissions: ["admin"],
        },
        alwaysShow: true,
        children: [
          {
            path: "menu1-1",
            component: () => import("@/views/vab/nested/menu1/menu1-1/index"),
            name: "Menu1-1",
            meta: { title: "嵌套路由 1-1" },
            alwaysShow: true,
            children: [
              {
                path: "menu1-1-1",
                component: () =>
                  import("@/views/vab/nested/menu1/menu1-1/menu1-1-1/index"),
                name: "Menu1-1-1",
                meta: { title: "嵌套路由 1-1-1" },
              },
            ],
          },
        ],
      },
      {
        path: "verify",
        name: "Verify",
        component: () => import("@/views/vab/verify/index"),
        meta: { title: "验证码", permissions: ["admin"] },
      },
      {
        path: "icon",
        name: "Icon",
        component: () => import("@/views/vab/icon/index"),
        meta: { title: "常规图标", permissions: ["admin"] },
      },
      {
        path: "remixIcon",
        name: "RemixIcon",
        component: () => import("@/views/vab/icon/remixIcon"),
        meta: { title: "小清新图标", permissions: ["admin"] },
      },
      {
        path: "colorfulIcon",
        name: "ColorfulIcon",
        component: () => import("@/views/vab/icon/colorfulIcon"),
        meta: { title: "多彩图标", permissions: ["admin"] },
      },
      {
        path: "table",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Table",
        meta: {
          title: "表格",
        },
        alwaysShow: true,
        children: [
          {
            path: "comprehensiveTable",
            name: "ComprehensiveTable",
            component: () => import("@/views/vab/table/index"),
            meta: { title: "综合表格", permissions: ["admin"] },
          },
          {
            path: "inlineEditTable",
            name: "InlineEditTable",
            component: () => import("@/views/vab/table/inlineEditTable"),
            meta: { title: "行内编辑", permissions: ["admin"] },
          },
        ],
      },
      {
        path: "form",
        name: "Form",
        component: () => import("@/views/vab/form/index"),
        meta: { title: "表单", permissions: ["admin"] },
      },
      {
        path: "element",
        name: "Element",
        component: () => import("@/views/vab/element/index"),
        meta: { title: "常用组件", permissions: ["admin"] },
      },
      {
        path: "tree",
        name: "Tree",
        component: () => import("@/views/vab/tree/index"),
        meta: { title: "树", permissions: ["admin"] },
      },
      {
        path: "card",
        name: "Card",
        component: () => import("@/views/vab/card/index"),
        meta: { title: "卡片", permissions: ["admin"] },
      },
      {
        path: "magnifier",
        name: "Magnifier",
        component: () => import("@/views/vab/magnifier/index"),
        meta: { title: "放大镜", permissions: ["admin"] },
      },
      {
        path: "waterfall",
        name: "Waterfall",
        component: () => import("@/views/vab/waterfall/index"),
        meta: {
          title: "瀑布屏",
          noKeepAlive: true,
          permissions: ["admin"],
        },
      },
      {
        path: "echarts",
        name: "Echarts",
        component: () => import("@/views/vab/echarts/index"),
        meta: { title: "图表", permissions: ["admin"] },
      },

      {
        path: "loading",
        name: "Loading",
        component: () => import("@/views/vab/loading/index"),
        meta: { title: "loading", permissions: ["admin"] },
      },
      {
        path: "player",
        name: "Player",
        component: () => import("@/views/vab/player/index"),
        meta: { title: "视频播放器", permissions: ["admin"] },
      },
      {
        path: "markdownEditor",
        name: "MarkdownEditor",
        component: () => import("@/views/vab/markdownEditor/index"),
        meta: { title: "markdown编辑器", permissions: ["admin"] },
      },
      {
        path: "editor",
        name: "Editor",
        component: () => import("@/views/vab/editor/index"),
        meta: { title: "富文本编辑器", permissions: ["admin"] },
      },
      {
        path: "qrCode",
        name: "QrCode",
        component: () => import("@/views/vab/qrCode/index"),
        meta: { title: "二维码", permissions: ["admin"] },
      },
      {
        path: "backToTop",
        name: "BackToTop",
        component: () => import("@/views/vab/backToTop/index"),
        meta: { title: "返回顶部", permissions: ["admin"] },
      },
      {
        path: "lodash",
        name: "Lodash",
        component: () => import("@/views/vab/lodash/index"),
        meta: { title: "lodash", permissions: ["admin"] },
      },
      {
        path: "imgComparison",
        name: "ImgComparison",
        component: () => import("@/views/vab/imgComparison/index"),
        meta: { title: "图像拖拽比对", permissions: ["admin"] },
      },
      {
        path: "codeGenerator",
        name: "CodeGenerator",
        component: () => import("@/views/vab/codeGenerator/index"),
        meta: { title: "代码生成机", permissions: ["admin"] },
      },
      {
        path: "markdown",
        name: "Markdown",
        component: () => import("@/views/vab/markdown/index"),
        meta: { title: "markdown阅读器", permissions: ["admin"] },
      },
      {
        path: "smallComponents",
        name: "SmallComponents",
        component: () => import("@/views/vab/smallComponents/index"),
        meta: { title: "小组件", permissions: ["admin"] },
      },

      {
        path: "upload",
        name: "Upload",
        component: () => import("@/views/vab/upload/index"),
        meta: { title: "上传", permissions: ["admin"] },
      },
      {
        path: "excel",
        component: EmptyLayout,
        redirect: "noRedirect",
        name: "Excel",
        meta: {
          title: "Excel",
        },
        children: [
          {
            path: "export-excel",
            component: () => import("@/views/vab/excel/export-excel"),
            name: "ExportExcel",
            meta: { title: "导出Excel" },
          },
          {
            path: "export-selected-excel",
            component: () => import("@/views/vab/excel/select-excel"),
            name: "SelectExcel",
            meta: { title: "导出选中行" },
          },
          {
            path: "export-merge-header",
            component: () => import("@/views/vab/excel/merge-header"),
            name: "MergeHeader",
            meta: { title: "导出合并" },
          },
          {
            path: "upload-excel",
            component: () => import("@/views/vab/excel/upload-excel"),
            name: "UploadExcel",
            meta: { title: "上传Excel" },
          },
        ],
      },
      {
        path: "sticky",
        name: "Sticky",
        component: () => import("@/views/vab/sticky/index"),
        meta: { title: "sticky吸附", permissions: ["admin"] },
      },
      {
        path: "log",
        name: "Log",
        component: () => import("@/views/vab/errorLog/index"),
        meta: { title: "错误日志模拟", permissions: ["admin"] },
      },
      {
        path: "news",
        name: "News",
        component: () => import("@/views/vab/news/index"),
        meta: { title: "新闻（可能存在跨域）", permissions: ["admin"] },
      },
      {
        path: "word",
        name: "Word",
        component: () => import("@/views/vab/word/index"),
        meta: { title: "word下载", permissions: ["admin"] },
      },
      {
        path: "more",
        name: "More",
        component: () => import("@/views/vab/more/index"),
        meta: { title: "更多组件", permissions: ["admin"] },
      },
    ],
  },

  {
    path: "/error",
    component: EmptyLayout,
    redirect: "noRedirect",
    name: "Error",
    meta: { title: "错误页", icon: "bug" },
    alwaysShow: true,
    children: [
      {
        path: "/401",
        name: "401",
        component: () => import("@/views/401"),
        meta: { title: "401" },
      },
      {
        path: "/404",
        name: "404",
        component: () => import("@/views/404"),
        meta: { title: "404" },
      },
    ],
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  mode: "hash",
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});

export function resetRouter() {
  router.matcher = new VueRouter({
    mode: "hash",
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  }).matcher;
}

const routerPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return routerPush.call(this, location).catch((error) => error);
};
export default router;
