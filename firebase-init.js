// firebase-init.js

const firebaseConfig = {
  apiKey: "AIzaSyAYXbmPGjMqCkOKwrz1yT4cP4i75T7Lgfg",
  authDomain: "mr-apple-store-fc5df.firebaseapp.com",
  projectId: "mr-apple-store-fc5df",
  storageBucket: "mr-apple-store-fc5df.firebasestorage.app",
  messagingSenderId: "527567478850",
  appId: "1:527567478850:web:7092e8cee5aa1684660ddb",
  measurementId: "G-ZSBRD46JGF"
};

// تشغيل Firebase باستخدام compat
firebase.initializeApp(firebaseConfig);

// auth متوفر بكل الصفحات
const auth = firebase.auth();
