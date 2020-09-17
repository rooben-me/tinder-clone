import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDloiMefI3ktfMQOD0jvvC1uPo5pSY3PKw",
  authDomain: "tinder-clone-1bf69.firebaseapp.com",
  databaseURL: "https://tinder-clone-1bf69.firebaseio.com",
  projectId: "tinder-clone-1bf69",
  storageBucket: "tinder-clone-1bf69.appspot.com",
  messagingSenderId: "644915904795",
  appId: "1:644915904795:web:94106a9ec6811df55d53be",
  measurementId: "G-3333MZ26C2",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
