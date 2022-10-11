import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  addDoc,
  serverTimestamp,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const addEmail = (email) => {
  const emailColRef = collection(db, "newsletter-emails");
  return addDoc(emailColRef, {
    created: serverTimestamp(),
    email: email,
  });
};

export const addContactMessage = (firstName, lastName, email, message) => {
  const emailColRef = collection(db, "contact-message");
  return addDoc(emailColRef, {
    created: serverTimestamp(),
    firstName: firstName,
    lastName: lastName,
    email: email,
    message: message,
  });
};

export const addBlogNewsletterEmail = (email) => {
  const emailColRef = collection(db, "blog-newsletter");
  return addDoc(emailColRef, {
    created: serverTimestamp(),
    email: email,
  });
};

export const addUser = (walletAddress, name) => {
  const userColRef = collection(db, "users");
  return addDoc(userColRef, {
    created: serverTimestamp(),
    walletAddress: walletAddress,
    name: name,
  });
};
