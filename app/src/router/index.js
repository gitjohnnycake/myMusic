import { createRouter, createWebHistory } from "vue-router";
import index from "views/index/App.vue";
import login from "views/login/Login.vue";
import agreement from "views/agreement/Agreement.vue";
import notFound from "views/notFound/NotFound.vue";
import cloudMusic from "views/cloudMusic/CloudMusic.vue";
import qqMusic from "views/qqMusic/QQMusic.vue";
import frontPage from "views/frontPage/FrontPage.vue";
import my from "views/my/My.vue";

const routes = [
  {
    path: "/",
    name: "start",
    component: index,
    meta: {
      title: "开启页面",
    },
  },
  {
    path: "/login",
    name: "login",
    component: login,
    meta: {
      title: "登陆页面",
    },
  },
  {
    path: "/agreement",
    name: "agreement",
    component: agreement,
    meta: {
      title: "用户协议页面",
    },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "notFound",
    component: notFound,
    meta: {
      title: "页面丢失",
    },
  },
  {
    path: "/frontPage",
    name: "frontPage",
    component: frontPage,
    meta: {
      title: "首页",
    },
    children: [
      {
        path: "/cloudMusic",
        name: "cloudMusic",
        component: cloudMusic,
        meta: {
          title: "网易云音乐首页",
        }
      },
      {
        path: "/qqMusic",
        name: "qqMusic",
        component: qqMusic,
        meta: {
          title: "qq音乐首页",
        },
      },
      {
        path: "/my",
        name: "my",
        component: my,
        meta: {
          title: "我的",
        },
      }
    ]
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
