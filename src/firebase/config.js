
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'; 
import { getFirestore } from 'firebase/firestore'; 
import { getStorage } from 'firebase/storage'; 


// Your web app's Firebase configuration
export const firebaseConfig = {
  apiKey: "AIzaSyAS3meIxG_FrSSEBWWJSqgQTCP0ZHakp2A",
  authDomain: "recipesfinalproject1.firebaseapp.com",
  projectId: "recipesfinalproject1",
  storageBucket: "recipesfinalproject1.appspot.com",
  messagingSenderId: "539639326737",
  appId: "1:539639326737:web:e2b4e027891bf2e4aa29b0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app); 

export default app; 