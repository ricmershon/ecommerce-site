import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyADIFNWoUKdZb9CioFJpU_9RjPmfzzz4wY",
  authDomain: "ecommerce-db-elm.firebaseapp.com",
  databaseURL: "https://ecommerce-db-elm.firebaseio.com",
  projectId: "ecommerce-db-elm",
  storageBucket: "ecommerce-db-elm.appspot.com",
  messagingSenderId: "895964022668",
  appId: "1:895964022668:web:7b683f09c7f994eb0a78a9",
  measurementId: "G-QSRR8D30QS"
}

export const createUserProfileDocument = async (userAuth, additionalData) => {

  // If no user authorized then return
  if (!userAuth) return;


  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get()

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch(error) {
      console.log('Error creating user', error.message)
    }
  }
  return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;