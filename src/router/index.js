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
