import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ShopContextProvider from "./Context/Context";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="767580215475-8kl9u807hsp7icnh7ljn02mse6s6abh6.apps.googleusercontent.com">
    <ShopContextProvider>
      <App />
      <ToastContainer pauseOnFocusLoss autoClose={3000} />
    </ShopContextProvider>
  </GoogleOAuthProvider>
);
