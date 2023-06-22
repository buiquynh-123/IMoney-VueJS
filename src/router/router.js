import { createRouter, createWebHistory } from "vue-router";
const requireAuth = (to, from, next) => {
  const user = localStorage.getItem("user");
  console.log("Before enter router", user);
  if (!user) next({ name: "Login", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "Home",
    meta: {
      text: "Hey, Bùi Đạt",
      leading: true,
      isShowFooter: true,
    },
    component: () => import(/*webpackChunkName: "index"*/ "../pages/index.vue"),
  },
  {
    path: "/register",
    name: "Register",
    meta: {
      layout: "auth",
      isShowFooter: true,
    },
    component: () =>
      import(
        /* webpackChunkName: "register" */ "../pages/register/register.vue"
      ),
  },
  {
    path: "/login",
    name: "Login",
    meta: {
      layout: "auth",
    },
    component: () =>
      import(/* webpackChunkName: "login" */ "../pages/login/login.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    meta: {
      text: "Profile",
      leading: false,
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "profile" */ "../pages/profile/profile.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/logout",
    name: "Logout",
    component: () =>
      import(/* webpackChunkName: "logout" */ "../pages/logout/logout.vue"),
  },
  {
    path: "/report",
    name: "Report",
    meta: {
      text: "Report",
      leading: false,
      // leading laf de hien thi avatar
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "report" */ "../pages/report/report.vue"),
  },
  {
    path: "/budget",
    name: "Budget",
    meta: {
      text: "Budget",
      leading: false,
      // leading laf de hien thi avatar
      isShowFooter: true,
    },
    component: () =>
      import(/* webpackChunkName: "budget" */ "../pages/budget/budget.vue"),
  },
  {
    path: "/new-transaction",
    name: "NewTransaction",
    meta: {
      text: "New Transaction",
      leading: true,
      // leading laf de hien thi avatar
      isShowFooter: false,
    },
    component: () =>
      import(
        /* webpackChunkName: "transaction" */ "../pages/new-Transaction.vue"
      ),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
