import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBUmRzqOzBdcyNMNaBNvq6NVqDfQuiP5hQ",
  authDomain: "crwn-clothing-project-c2ab6.firebaseapp.com",
  projectId: "crwn-clothing-project-c2ab6",
  storageBucket: "crwn-clothing-project-c2ab6.appspot.com",
  messagingSenderId: "103799897349",
  appId: "1:103799897349:web:298659160bd003af0d8b6c",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();



export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("errors creating the user ", error.message);
    }
  }
};
