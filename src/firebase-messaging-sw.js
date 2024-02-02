importScripts(
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.8.0/firebase-messaging-compat.js"
);
firebase.initializeApp({
  apiKey: "AIzaSyAPO_xiV63vZVqHuco9NZ_Rte187kH35Ag",
  authDomain: "pwa-test-a4111.firebaseapp.com",
  projectId: "pwa-test-a4111",
  storageBucket: "pwa-test-a4111.appspot.com",
  messagingSenderId: "708470795065",
  appId: "1:708470795065:web:9c0c8affb27fca301ed6e8",
  measurementId: "G-76Z5D7HPHP",
});
const messaging = firebase.messaging();
