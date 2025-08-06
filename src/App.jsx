import Home from "./Routes/Home/Home.component"
import Authentication from "./Routes/Authentication/Authentication.component"
import Navigation from "./Routes/Navigation/Navigation.component"
import Profile from "./Routes/Profile/Profile.component"
import Tees from "./Routes/Tees/Tees.component"
import Pants from "./Routes/Pants/Pants.component"
import Hats from "./Routes/Hats/Hats.component"
import Shoes from "./Routes/Shoes/Shoes.component"
import Shades from "./Routes/Shades/Shades.component"
import Cart from "./Routes/Cart/Cart.component"

import { Routes,Route,useNavigate,useLocation } from "react-router-dom"
import { useAuthState } from 'react-firebase-hooks/auth';
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
        <Route path="/tees" element={<Tees/>} />
        <Route path="/pants" element={<Pants/>}/>
        <Route path="/hats" element={<Hats/>}/>
        <Route path="/shoes" element={<Shoes/>}/>
        <Route path="/shades" element={<Shades/>}/>
        <Route path="/cart" element={<Cart/>}/>
        {user ? <Route path="/profile" element={<Profile/>}/> : <Route path="/authentication" element={<Authentication/>} />}
      </Routes>
    </>
  )
}

export default App
