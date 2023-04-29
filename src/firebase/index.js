import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBocElBtIZTZ3uUlZjK3XT63sAAmorcbG0",
  authDomain: "vue-auth-80990.firebaseapp.com",
  projectId: "vue-auth-80990",
  storageBucket: "vue-auth-80990.appspot.com",
  messagingSenderId: "361144019557",
  appId: "1:361144019557:web:825078db857addc016748c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export { auth }