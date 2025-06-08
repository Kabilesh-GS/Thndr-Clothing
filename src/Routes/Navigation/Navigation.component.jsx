import { Link } from "react-router-dom";
import './Navigation.style.scss'
import NavigationLogo from '../../assets/37_ligtning.jpg'

const Navigation=() => {
  return(
    <>
      <div className="navigation-pannel">
        <Link to="/" className="navigation-logo-container">
          <img className="navigation-logo" src={NavigationLogo} />
        </Link>
        <div className="navigation-links-conatiner">
          <Link className="navigation-link" to="/shop">Shop</Link>
          <Link className="navigation-link" to="/authentication">Sign-in</Link>
        </div>
      </div>
    </>
  )
}

export default Navigation;