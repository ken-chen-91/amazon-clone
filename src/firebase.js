import firebase, { auth } from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVmBN1DOTvvkotaCp4rLPPn9AGmPBmeGM",
  authDomain: "challenge-f6580.firebaseapp.com",
  databaseURL: "https://challenge-f6580.firebaseio.com",
  projectId: "challenge-f6580",
  storageBucket: "challenge-f6580.appspot.com",
  messagingSenderId: "704117843965",
  appId: "1:704117843965:web:68d4d910a50a7f6f621b94",
  measurementId: "G-40WF0TT9KW",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);     //连接firebase, 并初始化配置

const db = firebaseApp.firestore();   //创建数据库
const auth = firebase.auth();         //创建 firebase 的用户验证功能  

export {db, auth};
