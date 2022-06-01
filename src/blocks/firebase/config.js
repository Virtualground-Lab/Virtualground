import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from 'firebase/firestore/lite';
const firebaseConfig = {
    apiKey: "AIzaSyDgWjUhM6HSxLHr87gXC4YsDB8OJ0Iddrs",
    authDomain: "virtualground-meta.firebaseapp.com",
    projectId: "virtualground-meta",
    storageBucket: "virtualground-meta.appspot.com",
    messagingSenderId: "462797809660",
    appId: "1:462797809660:web:017b3c85a038864d0ef479",
    measurementId: "G-Q06S3GJWRT"
  };
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);