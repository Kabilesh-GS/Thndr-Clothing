import { signOutFun } from "../../Utility/Firebase/Firebase.utils";
import Button from "../../Components/Button/Button.component";
import FormInput from "../../Components/FormInput/FormInput.component";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../Utility/Firebase/Firebase.utils";

const Profile = () => {
  const [user] = useAuthState(auth);
  return(
    <div>
      <FormInput label="email" inputOptions={{value: user.email}} readonly/>
      <Button onClick={signOutFun} children="SignOut" />
    </div> 
  )
}

export default Profile;