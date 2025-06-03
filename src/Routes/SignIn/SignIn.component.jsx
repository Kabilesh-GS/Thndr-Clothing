import {signInWithGooglePopup,UserAuthData} from '../../Utility/Firebase/Firebase.utils';

const logGoogleUser = async () => {
    const response = await signInWithGooglePopup();
    console.log(response.user);
    UserAuthData(response.user);
  }

const SignIn = () => {
  return(
    <div>
      <h1>Sign in !</h1>
      <button onClick={logGoogleUser}>sign-in with Google</button>
    </div>
  )
}

export default SignIn