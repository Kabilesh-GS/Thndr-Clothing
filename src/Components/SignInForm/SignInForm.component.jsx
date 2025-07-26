import { useState,useContext } from "react";
import FormInput from "../FormInput/FormInput.component";
import Button from "../Button/Button.component";
import './SignInForm.style.scss'
import { signInWithGooglePopup, UserAuthData } from "../../Utility/Firebase/Firebase.utils";
import { SignInUserEmailPassword } from "../../Utility/Firebase/Firebase.utils";
import { UsersContext } from "../../Contexts/User.context";

const DefaultFormObj = {
  email: '',
  password: '',
}

const SignInForm = () => {
  const [FormField, setFormField] = useState(DefaultFormObj);
  const{ email,password } = FormField;
  const { setcurrentUser } = useContext(UsersContext);

  const ResetForm = () => {
    setFormField(DefaultFormObj);
  }

  const handleChange = (e) => {
    const {name , value} = e.target;

    setFormField({...FormField, [name]: value});
  }

  const logGoogleUser = async () => {
  const response = await signInWithGooglePopup();
  console.log(response);
  await UserAuthData(response.user);
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const { user } = await SignInUserEmailPassword(email,password);
      setcurrentUser(user);
      ResetForm();
    }
    catch(error){
      if(error.code === 'auth/invalid-credential'){
        alert('Incorrect Email or Password')
      }
      console.log(error);
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Already Have an account</h2>
      <span>Sign in with your email</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Email" 
            inputOptions = {{type :"email", 
            required : true,
            onChange : handleChange ,
            value : email,
            name: 'email'}}
        />
        <FormInput label="Password" 
            inputOptions = {{type :"password", 
            required : true,
            onChange : handleChange ,
            value : password,
            name: 'password'}}
        />
        <div className="buttons-container">
          <Button type="submit" children='Sign In'/>
          <Button type="button" onClick={logGoogleUser} buttonType='google' children='Google Sign in'/>
        </div>
      </form>
    </div>
  );
}

export default SignInForm;
