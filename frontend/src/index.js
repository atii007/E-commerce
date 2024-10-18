import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AuthProvider from "./context/authProvider";
import { Provider } from "react-redux";
import store from "./states-management/store/store";
// import Provider from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <AuthProvider>
      <App />
    </AuthProvider>
    <ToastContainer pauseOnFocusLoss={false} autoClose={2000} />
  </Provider>
);
