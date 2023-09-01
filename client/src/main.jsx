import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FavoriteCarProvider from "./Context/favoritecar-context.jsx";
import AuthProvider from "./Context/auth-context.jsx";
import { CookiesProvider } from "react-cookie";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <CookiesProvider>
    <AuthProvider>
      <FavoriteCarProvider>
        <App />
      </FavoriteCarProvider>
    </AuthProvider>
  </CookiesProvider>
  // </React.StrictMode>
);
