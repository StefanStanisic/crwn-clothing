import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyC8D3sHZ_UEitRyMC8zpzq-Z_SuDPEnK1c",
  authDomain: "crwn-db-1749d.firebaseapp.com",
  projectId: "crwn-db-1749d",
  storageBucket: "crwn-db-1749d.appspot.com",
  messagingSenderId: "405967958305",
  appId: "1:405967958305:web:4d6aa4bc2c80d62b58ce60",
  measurementId: "G-PNXW13SFVC"
};

export const createUserProfileDocument = async (userAuth, additonalData) => {
  if(!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if(!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additonalData
      })
    } catch (error) {
      console.log('Error creating user', error.message);
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
