import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, signInAnonymously } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCHELByUWACV98E4TYGiT_8TRcKGH0NXxc",
  authDomain: "talkstranger1.firebaseapp.com",
  projectId: "talkstranger1",
  storageBucket: "talkstranger1.appspot.com",
  messagingSenderId: "699925689591",
  appId: "1:699925689591:web:70fecbfa36c0f85666cff2",
  measurementId: "G-L0LK5NEZZK",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth();

export { auth, signInAnonymously };
