import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import help from "../views/help.vue";
import Blog from "../components/BlogPosts.vue";
import Profile from "../views/Profile.vue";
import Orders from "../views/Orders.vue";
import ChangePassword from "../views/ChangePassword.vue";
import PersonalInfo from "../views/PersonalInfo.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
    },

  {
      path: "/help",
      name: "Help",
      component: help
    },
    {
        path: "/blog",
        name: "blog",
        component: Blog
    },
    
    {
        path: "/profile",
        name: "profile",
        component: Profile
    },
    {
      path: "/orders",
      name: "orders",
      component: Orders
  },
  {
    path: "/changepassword",
    name: "changepassword",
    component: ChangePassword
  },
  {
    path: "/personalinfo",
    name: "personalinfo",
    component: PersonalInfo
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
