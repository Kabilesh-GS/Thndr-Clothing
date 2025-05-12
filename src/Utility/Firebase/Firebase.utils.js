import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, signInWithRedirect, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyC3Mg-83EWoDMVP7LV_smjBC1_8lh8ZI5I",
  authDomain: "thndr-clothing.web.app",
  projectId: "thndr-clothing",
  storageBucket: "thndr-clothing.appspot.com",
  messagingSenderId: "626460972621",
  appId: "1:626460972621:web:12eb1bdfe464c6d42b2e04"
};

const firebaseApp = initializeApp(firebaseConfig);

const provide = new GoogleAuthProvider();
provide.setCustomParameters({
  prompt : "select_account"
})

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provide);