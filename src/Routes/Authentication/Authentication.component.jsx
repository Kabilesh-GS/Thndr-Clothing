import SignUpForm from "../../Components/SignUpForm/SignUpForm.component";
import SignInForm from "../../Components/SignInForm/SignInForm.component";
import './Authentication.style.scss'

const Authentication = () => {
  return (
    <div className="authentication-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authentication;
