import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import FavoriteCarProvider from "./Context/favoritecar-context.jsx";
import AuthProvider from "./Context/auth-context.jsx";
import { CookiesProvider } from "react-cookie";
import VehicleProvider from "./Context/Vehicle-context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <AuthProvider>
    <CookiesProvider>
      <VehicleProvider>
        <FavoriteCarProvider>
          <App />
        </FavoriteCarProvider>
      </VehicleProvider>
    </CookiesProvider>
  </AuthProvider>
  // </React.StrictMode>
);
