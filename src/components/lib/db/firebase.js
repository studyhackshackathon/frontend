
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage';

const firebase_api_key = process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: `${firebase_api_key}`,
  authDomain: "studyhacks-file-upload.firebaseapp.com",
  projectId: "studyhacks-file-upload",
  storageBucket: "studyhacks-file-upload.appspot.com",
  messagingSenderId: "215471351279",
  appId: "1:215471351279:web:f9827e807903d5010b821a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)