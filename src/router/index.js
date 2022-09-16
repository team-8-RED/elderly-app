import { createRouter, createWebHistory } from "vue-router"
import HomeView from "../views/HomeView.vue"
import FirstView from "../views/FirstView.vue"
import LoginForm from "../views/LoginForm.vue"
import TopPage from "../views/TopPage.vue"
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
    path: "/loginForm",
    name: "loginForm",
    component: LoginForm,
  },
  {
    path: "/topPage",
    name: "topPage",
    component: TopPage,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router
