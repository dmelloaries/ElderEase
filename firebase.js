import {
  initializeApp,
  getAuth,
} from "https://www.gstatic.com/firebasejs/10.4.0/firebase-app.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAMxv46tg-ErOAqWGF6Tk4Xv96pF337ikI",
  authDomain: "login-a5650.firebaseapp.com",
  databaseURL: "https://login-a5650-default-rtdb.firebaseio.com",
  projectId: "login-a5650",
  storageBucket: "login-a5650.appspot.com",
  messagingSenderId: "317776195822",
  appId: "1:317776195822:web:c7c2f9767b57feed2503ff",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const Auth = getAuth(app);

export default Auth;
