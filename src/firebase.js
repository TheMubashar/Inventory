import firebase  from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAACs6sMu0EO0rHbUNZQAOrwjiXQ1deqSE",
  authDomain: "inventory-a761c.firebaseapp.com",
  projectId: "inventory-a761c",
  storageBucket: "inventory-a761c.appspot.com",
  messagingSenderId: "352395092341",
  appId: "1:352395092341:web:9cc99e54476651d7a2f33c",
  measurementId: "G-EPMGPVHMGT"
};

// Initialize the app
const firebaseApp = firebase.initializeApp(firebaseConfig);
// Firebase analytics
const firebaseAnalytics = firebase.analytics();

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth, firebaseAnalytics};