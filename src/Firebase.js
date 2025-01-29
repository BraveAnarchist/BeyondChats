// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBpb04mFU7yUxbXHa2AmdyaMoaXz7gUHHA",
  authDomain: "chatbot-d1f41.firebaseapp.com",
  projectId: "chatbot-d1f41",
  storageBucket: "chatbot-d1f41.firebasestorage.app",
  messagingSenderId: "148016868393",
  appId: "1:148016868393:web:a6ca458d4ba511f17cc038"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };