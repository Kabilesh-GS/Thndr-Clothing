import { signOutFun, getUserData } from "../../Utility/Firebase/Firebase.utils";
import Button from "../../Components/Button/Button.component";
import FormInput from "../../Components/FormInput/FormInput.component";
import { getAuth } from "firebase/auth";
import { useEffect, useState } from "react";

const Profile = () => {
  const [UserData, setUserData] = useState(null);

  useEffect(() => {
    const fetchDetails = async () => {
      const user = getAuth().currentUser;
      if(user){
        const data = await getUserData(user.uid);
        setUserData(data);
      }
    }
    fetchDetails();
  },[])

  return(
    <div>
      <FormInput label="Name" inputOptions={{value: UserData?.displayName || ''}} readonly/>
      <FormInput label="email" inputOptions={{value: UserData?.email || ''}} readonly/>
      <Button onClick={signOutFun} children="SignOut" />
    </div> 
  )
}

export default Profile;