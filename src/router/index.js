import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import FirstView from "../views/FirstView.vue"
import { createRouter, createWebHashHistory } from "vue-router"
import Login from "../components/organisms/LoginView.vue"
import Top from "../components/organisms/TopView.vue"
import { authorizeToken } from "./guards"

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/first",
    name: "first",
    component: FirstView,
  },
  {
    path: "/",
    name: "Top",
    component: Top,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
router.beforeEach(authorizeToken)
export default router
