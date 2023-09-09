// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase product;s that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfxCAr5doiqZ7f9XDXmnyfrJxA6k6A69o",
  authDomain: "soul-celestia-backend.firebaseapp.com",
  projectId: "soul-celestia-backend",
  storageBucket: "soul-celestia-backend.appspot.com",
  messagingSenderId: "180790919317",
  appId: "1:180790919317:web:b7439f53253d8758fc1b9c",
  measurementId: "G-QE5ECD2688"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);
export const auth = getAuth(app);
const db = getFirestore(app);
export {db}
export default app;