// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.13.2/firebase-analytics.js";
import { getFirestore ,doc, setDoc} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-getFirestore.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.13.2/firebase-auth.js"; //// isko same oper se copy kr k paste krna h or analytics ko hata kr auth likhna hai
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBy879TJjKUzti55xklbyKR1H8QY4Xj9ds",
    authDomain: "hackathon-cab4b.firebaseapp.com",
    projectId: "hackathon-cab4b",
    storageBucket: "hackathon-cab4b.appspot.com",
    messagingSenderId: "60564523581",
    appId: "1:60564523581:web:0590e5b579dd46ef83f854",
    measurementId: "G-2E8K23V1XN"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(); ///ye firebase se authentication krra h (or uper analytics ko edit kr k analytics ki jaga getAuth aye ga )
const db = getFirestore();
let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
//// idhar function or obj banny ga
window.signupUser = () => {
  let obj = {
    username: username.value,
    email: email.value,
    password: password.value,
  };
  console.log(obj);

  createUserWithEmailAndPassword(auth, obj.email, obj.password)/// ye 1 function hai
  .then((res) => {
    console.log(res, "res");
    obj.id = res.user.uid;
    delete obj.password;
    ///refrence
    const refrence = doc(db,'Users',obj.id);
    setDoc(refrence,obj);
    console.log(obj);
  })
  .catch((err) => {
    console.log(err);
  });
};
