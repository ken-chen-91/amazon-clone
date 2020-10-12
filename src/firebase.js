// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/auth';        // for authentication
import 'firebase/storage';     // for storage
import 'firebase/database';    // for realtime database
import 'firebase/firestore';   // for cloud firestore
import 'firebase/messaging';   // for cloud messaging
import 'firebase/functions';   // for cloud functions
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASqzkMzqxvemuNxwgcw8LtH1TVbNTvyug",
  authDomain: "clone-53109.firebaseapp.com",
  databaseURL: "https://clone-53109.firebaseio.com",
  projectId: "clone-53109",
  storageBucket: "clone-53109.appspot.com",
  messagingSenderId: "888199254745",
  appId: "1:888199254745:web:e7a8e7657e4a101f0be4c8",
  measurementId: "G-CE8GBXTRQK",
};

const firebaseApp = firebase.initializeApp(firebaseConfig); //连接firebase, 并初始化配置

const db = firebaseApp.firestore(); //创建数据库
const auth = firebase.auth(); //创建 firebase 的用户验证功能

export { db, auth };   
