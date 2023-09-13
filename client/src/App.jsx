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
import { useEffect, useState } from "react";
import { ToastContainer } from "react-toastify";
import { useCookies } from "react-cookie";
import PrivateRoute from "./routes/PrivateRoute";
import { useAuthContext } from "./hooks/useAuthContext";
import Loader from "./components/loader";
import FrogetPassword from "./components/ForgotPassword/FrogetPassword";
import ResetPassword from "./components/ForgotPassword/ResetPassword";
function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [cookie, setCookie] = useCookies(["refreshToken"]);
  //const [userCookie, setUserCookie] = useCookies(["user"]);
  const { isLoggedIn } = useAuthContext();

  // useEffect(() => {
    // setCookie(
    //   "refreshToken",
    //   localStorage.getItem("token") ? localStorage.getItem("token") : "",
    //   [{ expires: 360000 + Date.now(), secure: true }]
    // );
    // setUserCookie(
    //   "user",
    //   localStorage.getItem("user") ? localStorage.getItem("user") : "",
    //   [{ expires: 360000 + Date.now(), secure: true }]
    // );
  // }, [cookie]);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, [isLoading]);

  return (
    <>
      {isLoading && <Loader />}
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
            <Route path='/forget-password' element={<FrogetPassword/>}></Route>
            <Route path='/reset-password' element={<ResetPassword/>}></Route>
            <Route
              path="/my-account"
              element={
                <PrivateRoute path="/my-account" auth={isLoggedIn}>
                  <MyAccount />
                </PrivateRoute>
              }
            ></Route>
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
            theme="light"
          />
        </Router>
      )}
    </>
  );
}

export default App;
