import { createRouter, createWebHistory } from "vue-router"
import FirstView from "../views/FirstView.vue"
import LoginForm from "../views/LoginForm.vue"
import TopPage from "../views/TopPage.vue"
import CourseExam from "../views/CourseExam.vue"
import LineCourse from "../views/Line/LineCourse.vue"
import LinePhoneCall from "../views/Line/LinePhoneCall.vue"
import WorkOutCall from "../views/Line/LinePhoneCallWorkout.vue"
import StaffCredit from "../views/StaffCredit.vue"
import FlickParent from "../views/FlickParent.vue"
import FlickPractice from "../views/FlickPractice.vue"
import FlickPractice2 from "../views/FlickPractice2.vue"
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
  {
    path: "/flickPractice",
    name: "flickPractice",
    component: FlickPractice,
  },
  {
    path: "/flickPractice2",
    name: "flickPractice2",
    component: FlickPractice2,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
