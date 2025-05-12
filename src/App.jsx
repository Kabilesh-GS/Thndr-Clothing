import Home from "./Routes/Home/Home.component"
import SignIn from "./Routes/SignIn/SignIn.component"
import Navigation from "./Routes/Navigation/Navigation.component"
import { Routes,Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/Sign-in" element={<SignIn/>} />
      </Routes>
    </>
  )
}

export default App
