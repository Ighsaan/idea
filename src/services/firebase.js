import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB_gMWiFcC7BJYKfz49LW6RVc7WCrYSW0M",
    authDomain: "ideas-4c887.firebaseapp.com",
    projectId: "ideas-4c887",
    storageBucket: "ideas-4c887.appspot.com",
    messagingSenderId: "93980800242",
    appId: "1:93980800242:web:6b7aa64176cb5cab55cc6b",
    measurementId: "G-4YL43TM4Z3"
}

const app = firebase.initializeApp(firebaseConfig);
export const auth = app.auth();
export const db = app.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();


export const signInWithGoogle = async () => {
    try {
      const res = await auth.signInWithPopup(googleProvider);
      const user = res.user;
      const query = await db
        .collection("users")
        .where("uid", "==", user.uid)
        .get();
      if (query.docs.length === 0) {
        await db.collection("users").add({
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
    // console.log(user);
    } catch (err) {
      console.error(err);
      alert(err.message);
    }
};

export const logout = () => {
    auth.signOut();
};