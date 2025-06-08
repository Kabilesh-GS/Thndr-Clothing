import Home from "./Routes/Home/Home.component"
import Authentication from "./Routes/Authentication/Authentication.component"
import Navigation from "./Routes/Navigation/Navigation.component"
import { Routes,Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/authentication" element={<Authentication/>} />
      </Routes>
    </>
  )
}

export default App
