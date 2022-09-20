import { createRouter, createWebHistory } from "vue-router"
import FirstView from "../views/FirstView.vue"
import LoginForm from "../views/LoginForm.vue"
import TopPage from "../views/TopPage.vue"
import CourseExam from "../views/CourseExam.vue"
import LineCourse from "../views/Line/LineCourse.vue"
import LinePhoneCall from "../views/Line/LinePhoneCall.vue"
import WorkOutCall from "../views/Line/LinePhoneCallWorkout.vue"
const routes = [
  // {
  //   path: "/about",
  //   name: "about",
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () =>
  //     import(/* webpackChunkName: "about" */ "../views/LInecourse.vue"),
  // },
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
  {
    path: "/courselist",
    name: "Courselist",
    component: CourseExam,
  },
  {
    path: "/linecourse",
    name: "LineCourse",
    component: LineCourse,
  },
  {
    path: "/linephonecall",
    name: "LinePhoneCall",
    component: LinePhoneCall,
  },
  {
    path: "/workoutcall",
    name: "WorkOutCall",
    component: WorkOutCall,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
