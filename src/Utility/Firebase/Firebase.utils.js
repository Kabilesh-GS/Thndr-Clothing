import { initializeApp } from 'firebase/app'
import { getAuth, signInWithPopup, signOut,createUserWithEmailAndPassword, GoogleAuthProvider,signInWithEmailAndPassword} from 'firebase/auth'
import { getFirestore,doc,getDoc,setDoc } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyC3Mg-83EWoDMVP7LV_smjBC1_8lh8ZI5I",
  authDomain: "thndr-clothing.web.app",
  projectId: "thndr-clothing",
  storageBucket: "thndr-clothing.appspot.com",
  messagingSenderId: "626460972621",
  appId: "1:626460972621:web:12eb1bdfe464c6d42b2e04"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signOutFun = () => signOut(auth);

export const DB = getFirestore();
export const UserAuthData = async (userID, additionalInfo = {}) => {
  const UserDocPresent = doc(DB, 'users' ,userID.uid);
  const UserDataView = await getDoc(UserDocPresent);

  if(!UserDataView.exists()){
    const createdDate = new Date();
    const {displayName , email} = userID;

    try{
      await setDoc(UserDocPresent, {
        displayName,
        email,
        createdDate,
        ...additionalInfo
      });
    }catch(error){
        console.log('Cannot add data', error);
    }
  }
}
export const getUserData = async (uid) =>{
  try{
    const userDocRef = doc(DB, 'users', uid);
    const userSnap = await getDoc(userDocRef);

    if(userSnap.exists()){
      return userSnap.data();
    }
  }
  catch(error){
    alert("No data found");
  }
}

export const CreateUserWithEmailAndPassword = async (email,password) => {
  return await createUserWithEmailAndPassword(auth,email,password)
}
export const SignInUserEmailPassword = async (email,password) => {
  return await signInWithEmailAndPassword(auth,email,password);
}