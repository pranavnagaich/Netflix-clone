import { initializeApp } from "firebase/app";
import{ getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD1rkgBsWUziH7lGYMZW1WmckbcpPix4uU",
  authDomain: "react-netflix-clone-367e3.firebaseapp.com",
  projectId: "react-netflix-clone-367e3",
  storageBucket: "react-netflix-clone-367e3.appspot.com",
  messagingSenderId: "5440646178",
  appId: "1:5440646178:web:c88aad62c946c41aeaae7b",
  measurementId: "G-ELYJ56DKEL"
};

const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);