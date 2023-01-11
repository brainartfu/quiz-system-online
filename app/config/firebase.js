import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyCvuJXYm2z2LB_7_KdLc2GzN6vkRbPR8JM",
  authDomain: "plancam-fda56.firebaseapp.com",
  databaseURL: "https://plancam-fda56-default-rtdb.firebaseio.com",
  projectId: "plancam-fda56",
  storageBucket: "plancam-fda56.appspot.com",
  messagingSenderId: "107125968278",
  appId: "1:107125968278:web:77af8b97241db5357321b7",
  measurementId: "G-DTNM3YF8WK"
};

const app = initializeApp(firebaseConfig);
export default app;


// import * as firebase from "firebase";
// var firebaseConfig = {
//   apiKey: "AIzaSyDOdjTJEqjAyUHoEgxqXuvyAx-tq89jNvg",
//   authDomain: "gravity-education-5e4b9.firebaseapp.com",
//   databaseURL: "https://gravity-education-5e4b9.firebaseio.com",
//   projectId: "gravity-education-5e4b9",
//   storageBucket: "gravity-education-5e4b9.appspot.com",
//   messagingSenderId: "907639568259",
//   appId: "1:907639568259:web:8f9c2aec10984bd75928b6",
// };

// if (!firebase.apps.length) {
//   firebase.initializeApp(firebaseConfig);
// }
// export default firebase;