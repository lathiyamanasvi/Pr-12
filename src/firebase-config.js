import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCoWc5kykjCytekeUvWZUSEhLipknMXF_k",
  authDomain: "to-do-list-cfe39.firebaseapp.com",
  projectId: "to-do-list-cfe39",
  storageBucket: "to-do-list-cfe39.appspot.com",
  messagingSenderId: "525456334180",
  appId: "1:525456334180:web:d77d62e9c54d90763a6e71",
  measurementId: "G-H190JQ59ZS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const manu = getFirestore(app);