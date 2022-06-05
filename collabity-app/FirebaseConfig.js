import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYQYXEf7OzPMOn5quCY3f1K9JiuDrlV5A",
  authDomain: "collabity-32818.firebaseapp.com",
  projectId: "collabity-32818",
  storageBucket: "collabity-32818.appspot.com",
  messagingSenderId: "74136005940",
  appId: "1:74136005940:web:e2818dae9b691a2bc58961",
  measurementId: "G-D49V0B3BJ3"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);