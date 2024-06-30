import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_KEY,
  authDomain: "realtime-chat-app-18525.firebaseapp.com",
  projectId: "realtime-chat-app-18525",
  storageBucket: "realtime-chat-app-18525.appspot.com",
  messagingSenderId: "182473608029",
  appId: "1:182473608029:web:9d34d9cf79329621a2f6b4",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getFirestore();
export const storage = getStorage();
