import Vue from "vue";
import Router from "vue-router";
import store from "./store/store";

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("./views/Home.vue"),
    },
    {
      path: "/about",
      name: "about",
      component: () => import("./views/About.vue"),
    },
    {
      path: "/albums",
      name: "albums",
      component: () => import("./views/Albums.vue"),
      meta: {
        requiresAuthentication: true,
      },
    },
    {
      path: "/favorites",
      name: "favorites",
      component: () => import("./views/Favorites.vue"),
      meta: {
        requiresAuthentication: true,
      },
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuthentication)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/");
    return;
  }
  next();
});

export default router;
