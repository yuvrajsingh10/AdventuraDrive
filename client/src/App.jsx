import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
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
import { useContext, useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useCookies } from "react-cookie";
import { AuthContext } from "./Context/auth-context";
// import Payment from "./pages/Payment";

function App() {
  const user_ctx = useContext(AuthContext);
  const [isLoading, setIsLoading] = useState(true);

  const [cookie,setCookie]= useCookies(['refreshToken'])
  useEffect(()=>{
    setCookie('refreshToken',localStorage.getItem('token')?localStorage.getItem('token'):'')
  },[cookie])

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <>
      {isLoading && (
        <>
          <div className="container w-50 h-50 mx-auto text-center">
            <h3>loading...</h3>
          </div>
        </>
      )}
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
          <ToastContainer
            position="top-center"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
          />
        </Router>
      )}
    </>
  );
}

export default App;
