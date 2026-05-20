import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC5465t6DXAnqKtroG24uc082MHbqRdIJo",
  authDomain: "expense-tracker-dbddb.firebaseapp.com",
  projectId: "expense-tracker-dbddb",
  storageBucket: "expense-tracker-dbddb.firebasestorage.app",
  messagingSenderId: "672552852309",
  appId: "1:672552852309:web:3a598f49ea49cdb368addc"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

export const auth = getAuth(app);