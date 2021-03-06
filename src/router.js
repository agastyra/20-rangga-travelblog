import Vue from "vue";
import Router from "vue-router";

import Home from "@/views/Home.vue";
import Contact from "@/views/Contact.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: __dirname,
  routes: [
    { path: "/", component: Home },
    { path: "/contact", component: Contact },
  ],
});
