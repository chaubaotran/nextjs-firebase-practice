import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAh_4IprMv3KfWnPX-EdIBU-mL9-C0LeNc",
  authDomain: "practice-app-bc4f4.firebaseapp.com",
  projectId: "practice-app-bc4f4",
  storageBucket: "practice-app-bc4f4.appspot.com",
  messagingSenderId: "454065026697",
  appId: "1:454065026697:web:57a71ab9cfe11b0d953858",
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
