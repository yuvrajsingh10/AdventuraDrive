import "../node_modules/bootstrap/dist/css/bootstrap.css"
import './App.css'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Header from "./components/header/Header"
import Home from "./pages/Home"
import Cars from "./pages/cars"
import Footer from "./components/Footer/Footer"
import Bookings from "./pages/Bookings"
import About from "./pages/About"


function App() {


  return (
    <>
      <Router>
          <Header />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/About" element={<About/>}></Route>
          <Route path="/cars" element={<Cars/>}></Route>
          <Route path="/bookings" element={<Bookings/>}></Route>
        </Routes>
        <Footer/>
      </Router>

    </>
  )
}

export default App
