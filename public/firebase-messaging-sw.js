importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyBNCyo5P7a36tQGMDQ9wTYWD0sC9chyz5I",
  authDomain: "fir-app-5d2ce.firebaseapp.com",
  projectId: "fir-app-5d2ce",
  storageBucket: "fir-app-5d2ce.appspot.com",
  messagingSenderId: "723988363916",
  appId: "1:723988363916:web:526d4a975b7d34888359a9",
  measurementId: "G-4R1C1QZSC7"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
