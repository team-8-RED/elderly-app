import { createRouter, createWebHistory } from "vue-router"
import FirstView from "../views/FirstView.vue"
import LoginForm from "../views/LoginForm.vue"
import TopPage from "../views/TopPage.vue"
import FlickPage from "../views/FlickPage.vue"
import FlickPre from "../views/FlickPre.vue"
import StaffCredit from "../views/StaffCredit.vue"
import FlickParent from "../views/FlickParent.vue"
const routes = [
  {
    path: "/",
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
  {
    path: "/flickPage",
    name: "flick",
    component: FlickPage,
  },
  {
    path: "/flickPre",
    name: "flickPre",
    component: FlickPre,
  },
  {
    path: "/staffCredit",
    name: "staffCredit",
    component: StaffCredit,
  },
  {
    path: "/flickParent",
    name: "flickParent",
    component: FlickParent,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})
export default router
