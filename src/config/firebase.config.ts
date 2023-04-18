import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDNFxBME6vvwLxR3a3_GmNunDlVh_EBq1s",
  authDomain: "e-mattcommerce.firebaseapp.com",
  projectId: "e-mattcommerce",
  storageBucket: "e-mattcommerce.appspot.com",
  messagingSenderId: "205879857898",
  appId: "1:205879857898:web:bd75851aab5fb25181bd93"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)