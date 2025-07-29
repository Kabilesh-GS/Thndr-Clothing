import { useState } from "react";
import { CreateUserWithEmailAndPassword,UserAuthData } from "../../Utility/Firebase/Firebase.utils";
import FormInput from "../FormInput/FormInput.component";
import './SignUpForm.style.scss'
import Button from "../Button/Button.component";

const DefaultFormObj = {
  displayName: '',
  email: '',
  password: '',
  conformPassword: ''
}

const SignUpForm = () => {
  const [FormField, setFormField] = useState(DefaultFormObj);
  const{ displayName,email,password,conformPassword } = FormField;

  const ResetForm = () => {
    setFormField(DefaultFormObj);
  }

  const handleChange = (e) => {
    const {name , value} = e.target;

    setFormField({...FormField, [name]: value});
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(password !== conformPassword){
      alert('Password do not match');
      return;
    }

    try{
      const u = await CreateUserWithEmailAndPassword(email,password);
      const user = u.user;
      await UserAuthData(user, {displayName});
      ResetForm();
    }
    catch(error){
      console.log('user creation encountered an arror', error);
    }
  }

  return (
    <div className="sign-up-container">
      <h2>Don't have an account</h2>
      <span>Sign Up with your Email</span>
      <form onSubmit={handleSubmit}>
        <FormInput label="Display Name" 
          inputOptions = {{type :"text", 
          required : true,
          onChange : handleChange ,
          value : displayName,
          name: 'displayName'}}
        />
        
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

        <FormInput label="Confirm Password" 
          inputOptions = {{type :"password", 
          required : true,
          onChange : handleChange ,
          value : conformPassword,
          name: 'conformPassword'}}
        />

        <Button type="submit" children='Sign Up'/>
      </form>
    </div>
  )
}

export default SignUpForm;