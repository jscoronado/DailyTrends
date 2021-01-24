import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

const config = {
  apiKey: "AIzaSyArQuRcsJpwCczanXapMuClP7H0cSu0d_o",
  authDomain: "dailytrendsapp-jc9mb.firebaseapp.com",
  projectId: "dailytrendsapp-jc9mb",
  storageBucket: "dailytrendsapp-jc9mb.appspot.com",
  messagingSenderId: "238863942137",
  appId: "1:238863942137:web:8d288d99b332ced9b87d28",
  measurementId: "G-4R3N25LGLB"
};

const firebaseInit = firebase.initializeApp(config);
export const db = firebaseInit.firestore();
