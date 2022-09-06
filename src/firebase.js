import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  apiKey: "AIzaSyBPzivzdRx20fhgHskQ7G2U7MkuXyz7KRU",
  authDomain: "eldeely-app.firebaseapp.com",
  projectId: "eldeely-app",
  storageBucket: "eldeely-app.appspot.com",
  messagingSenderId: "199594086984",
  appId: "1:199594086984:web:5cc2683e41ae826fc63e7d",
  measurementId: "G-1YS88W9CTL",
}

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)
