import Home from "./Routes/Home/Home.component"
import Authentication from "./Routes/Authentication/Authentication.component"
import Navigation from "./Routes/Navigation/Navigation.component"
import Profile from "./Routes/Profile/Profile.component"
import { Routes,Route,useNavigate,useLocation } from "react-router-dom"
import {useAuthState} from 'react-firebase-hooks/auth';
import { auth } from "./Utility/Firebase/Firebase.utils";
import { useEffect } from "react"

function App() {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (user && location.pathname === "/authentication") {
      navigate("/profile");
    }
    if (!user && location.pathname === "/profile") {
      navigate("/authentication");
    }
  },[user,navigate,location.pathname])

  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        {user ? <Route path="/profile" element={<Profile/>}/> : <Route path="/authentication" element={<Authentication/>} />}
      </Routes>
    </>
  )
}

export default App
