import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBg5wDrQ-sbyxIGD2fkTVcYAxsVh0ZDRPE",
    authDomain: "jak-instagram-clone.firebaseapp.com",
    projectId: "jak-instagram-clone",
    storageBucket: "jak-instagram-clone.appspot.com",
    messagingSenderId: "79378874182",
    appId: "1:79378874182:web:e4cbe12bac59a1f1426f47",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { app, db, storage };
