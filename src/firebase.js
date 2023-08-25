import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyBNCyo5P7a36tQGMDQ9wTYWD0sC9chyz5I",
    authDomain: "fir-app-5d2ce.firebaseapp.com",
    projectId: "fir-app-5d2ce",
    storageBucket: "fir-app-5d2ce.appspot.com",
    messagingSenderId: "723988363916",
    appId: "1:723988363916:web:526d4a975b7d34888359a9",
    measurementId: "G-4R1C1QZSC7"
  };

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
