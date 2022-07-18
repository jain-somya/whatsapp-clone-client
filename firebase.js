import { initializeApp } from "firebase/app";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyAHiDUV_ajzrKmw5G0Sgjss-YQ6fKRmrQs",
  authDomain: "whatsapp-clone-a5b67.firebaseapp.com",
  projectId: "whatsapp-clone-a5b67",
  storageBucket: "whatsapp-clone-a5b67.appspot.com",
  messagingSenderId: "189542740435",
  appId: "1:189542740435:web:0e1bf17dbeae01e6eabf26",
};

const app = initializeApp(firebaseConfig);
//const db = firebaseApp.firestore();
// export default db;

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
export { auth, provider };
