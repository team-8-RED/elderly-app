import { createRouter, createWebHistory } from "vue-router"
import FirstView from "../views/FirstView.vue"
import LoginForm from "../views/LoginForm.vue"
import TopPage from "../views/TopPage.vue"
import CourseExam from "../views/CourseExam.vue"
import LineCourse from "../views/Line/LineCourse.vue"
import LinePhoneCall from "../views/Line/LinePhoneCall.vue"
import WorkOutCall from "../views/Line/LinePhoneCallWorkout.vue"
import LineMessage from "../views/Line/LineSendMessage.vue"
import Addfriends from "../views/Line/LineNewFriends.vue"
import Sendphotos from "../views/Line/LineSendPhoto.vue"
import PaypayCourse from "../views/paypay/PaypayCourse.vue"
import PaypayCharge from "../views/paypay/PaypayCharge.vue"
import PaypayPay from "../views/paypay/PaypayPay.vue"
import PaypaySend from "../views/paypay/PaypaySend.vue"
import YoutubeCourse from "../views/Youtube/YoutubeCourse.vue"
import YoutubeLike from "../views/Youtube/YoutubeLike.vue"
import YoutubeWatch from "../views/Youtube/YoutubeWatch.vue"
import SafariCourse from "../views/Safari/SafariCourse.vue"
import SafariSearch from "../views/Safari/SafariSearch.vue"
import SafariDelete from "../views/Safari/SafariDelete.vue"
import GoogleMapCourse from "../views/GoogleMap/GooglemapCourse.vue"
import GoogleMap from "../views/GoogleMap/GooglemapHowto.vue"

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
  {
    path: "/linemessage",
    name: "LineMessage",
    component: LineMessage,
  },
  {
    path: "/addfriends",
    name: "AddFriends",
    component: Addfriends,
  },
  {
    path: "/sendphotos",
    name: "Sendphotos",
    component: Sendphotos,
  },
  {
    path: "/paypaycourse",
    name: "PaypayCourse",
    component: PaypayCourse,
  },
  {
    path: "/paypaycharge",
    name: "PaypayCharge",
    component: PaypayCharge,
  },
  {
    path: "/paypaypay",
    name: "PaypayPay",
    component: PaypayPay,
  },
  {
    path: "/paypaysend",
    name: "PaypaySemd",
    component: PaypaySend,
  },
  {
    path: "/youtubecourse",
    name: "YoutubeCourse",
    component: YoutubeCourse,
  },
  {
    path: "/youtubelike",
    name: "YoutubeLikee",
    component: YoutubeLike,
  },
  {
    path: "/youtubewatch",
    name: "YoutubeWatch",
    component: YoutubeWatch,
  },
  {
    path: "/safaricourse",
    name: "SafariCourse",
    component: SafariCourse,
  },
  {
    path: "/safarisearch",
    name: "SafariSearch",
    component: SafariSearch,
  },
  {
    path: "/safaridelete",
    name: "SafariDelete",
    component: SafariDelete,
  },
  {
    path: "/googlemapcourse",
    name: "GoogleMapCourse",
    component: GoogleMapCourse,
  },
  {
    path: "/googlemap",
    name: "GoogleMap",
    component: GoogleMap,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
