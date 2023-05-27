import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyC2CJyU3dFWF94QTau62rdu3m-SvatawRo",
  authDomain: "flix-hive.firebaseapp.com",
  projectId: "flix-hive",
  storageBucket: "flix-hive.appspot.com",
  messagingSenderId: "495543220024",
  appId: "1:495543220024:web:fe29e6433c1e9d9a5473cd"
};


export const app = initializeApp(firebaseConfig);