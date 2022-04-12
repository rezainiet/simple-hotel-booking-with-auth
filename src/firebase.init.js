// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'react'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCBDRnAItHYkyHl6PPssICF30h7sw1QJww",
    authDomain: "simple-hotel-booking-with-auth.firebaseapp.com",
    projectId: "simple-hotel-booking-with-auth",
    storageBucket: "simple-hotel-booking-with-auth.appspot.com",
    messagingSenderId: "794542172898",
    appId: "1:794542172898:web:733e8a82918b41997d0cbb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;