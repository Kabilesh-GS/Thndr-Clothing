import { useState } from "react";

const DefaultFormObj = {
  displayName: '',
  email: '',
  password: '',
  conformPassword: ''
}

const SignUpForm = () => {
  const [FormField, setFormField] = useState(DefaultFormObj);
  const{ displayName,email,password,conformPassword } = FormField;

  const handleChange = (e) => {
    const {name , value} = e.target;

    setFormField({...FormField, [name]: value});
  }

  return (
    <div>
      <h1>Sign up with email</h1>
      <form onSubmit={() => {}}>
        <label>Display Name</label>
        <input type="text" required onChange={handleChange} value={displayName} name='displayName'/>

        <label>Email</label>
        <input type="email" required onChange={handleChange} value={email} name='email'/>

        <label>Passowrd</label>
        <input type="password" required onChange={handleChange} value={password} name='password'/>

        <label>Confirm Password</label>
        <input type="password" required onChange={handleChange} value={conformPassword} name='conformPassword'/>

        <button type="submit">Sign Up</button>
      </form>
    </div>
  )
}

export default SignUpForm;