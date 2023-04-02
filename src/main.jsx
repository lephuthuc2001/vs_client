import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import AuthProvider from "./contexts/AuthProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartInfo from "./components/CartInfo";
import SearchBar from "./components/SearchBar";
import("preline");

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <SearchBar />
    <ToastContainer />
    <App />
    <CartInfo />
  </AuthProvider>
);
