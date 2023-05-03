/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbB8d9WprndSTEisUcLzg4vg7nD_cWD84",
  authDomain: "chef-recipe-hunting-assi-1edae.firebaseapp.com",
  projectId: "chef-recipe-hunting-assi-1edae",
  storageBucket: "chef-recipe-hunting-assi-1edae.appspot.com",
  messagingSenderId: "120509531971",
  appId: "1:120509531971:web:30d0bb978afcc00a8151f6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;