import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./components/Home/Home";
import Cars from "./components/Cars/cars";
import Footer from "./components/Footer/Footer";
import Bookings from "./components/Booking/Bookings";
import About from "./components/About/About";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MyAccount from "./components/Dashboard/MyAccount";
import { useEffect, useState } from "react";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    console.log("asds");
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <>
      {!isLoading && (
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/About" element={<About />}></Route>
            <Route path="/cars" element={<Cars />}></Route>
            <Route path="/bookings" element={<Bookings />}></Route>
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/my-account" element={<MyAccount />}></Route>
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
}

export default App;
