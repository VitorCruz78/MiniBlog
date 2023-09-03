import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCVLsalBEn6b_UUK7si6xITxwkwvTCVRR8",
    authDomain: "miniblog-d9d61.firebaseapp.com",
    projectId: "miniblog-d9d61",
    storageBucket: "miniblog-d9d61.appspot.com",
    messagingSenderId: "22251666502",
    appId: "1:22251666502:web:4ce67c14e2a8e6dc091e47"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }