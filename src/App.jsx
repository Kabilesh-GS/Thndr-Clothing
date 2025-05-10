import Home from "./Routes/Home/Home.component"
import Navigation from "./Routes/Navigation/Navigation.component"
import { Routes,Route } from "react-router-dom"

function App() {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
