import { useContext } from "react";
import { Link } from "react-router-dom";
import { UsersContext } from "../../Contexts/User.context";
import './Navigation.style.scss'
import NavigationLogo from '../../assets/37_ligtning.jpg'
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from "../../Utility/Firebase/Firebase.utils";

const Navigation=() => {
  const [user] = useAuthState(auth);
  const { currentUser } = useContext(UsersContext);
  console.log(currentUser);
  return(
    <>
      <div className="navigation-pannel">
        <Link to="/" className="navigation-logo-container">
          <img className="navigation-logo" src={NavigationLogo} />
        </Link>
        <div className="navigation-links-conatiner">
          <Link className="navigation-link" to="/shop">Shop</Link>
          {user ? <Link className="navigation-link" to="/profile">Profile</Link> :<Link className="navigation-link" to="/authentication">Sign-in</Link>}
        </div>
      </div>
    </>
  )
}

export default Navigation;