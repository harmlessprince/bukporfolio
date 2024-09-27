import {initializeApp} from "firebase/app";
import { getFirestore, collection } from 'firebase/firestore'

const projectId = import.meta.env.VITE_FIREBASE_PROJECT_ID;
const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: `${projectId}.firebaseapp.com`,
    projectId: projectId,
    storageBucket: `${projectId}.appspot.com`,
    messagingSenderId: "702166084486",
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: "G-3PHNE5S8ZF",
    databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL,
};



export const firebaseApp = initializeApp(firebaseConfig)
export const database = getFirestore(firebaseApp)