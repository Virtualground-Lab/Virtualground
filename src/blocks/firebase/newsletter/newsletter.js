import { db } from '../config';
import { collection, addDoc } from "firebase/firestore"; 


export default function submitNewsletter({email}) {
    const upload = addDoc(collection(db, "newsletter-emails"), {
      email: {email},
      createdAt: firebase.firestore.Timestamp.now(),
    });
    console.log('+++++++', upload);
  }