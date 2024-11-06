import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Home";
import Order from "./Pages/Order/Order";
import Nopage from "./Pages/Nopage/Nopage";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import Cart from "./Pages/Cart/Cart";
import MyState from "./Context/Data/myState";
import ProductInfo from "./Pages/Productinfo/ProductInfo";
import Login from "./Pages/Registration/Login";
import Signup from "./Pages/Registration/Signup";
import DashboardTab from "./Pages/Admin/Dashboard/DashboardTab";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Order" element={<Order />} />
          <Route path="/nopage" element={<Nopage />} />
          <Route path="/Allproducts" element={<Dashboard />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/ProductInfo/:id" element={<ProductInfo />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/DashboardTab" element={<DashboardTab />} />
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;

// protected route for user

const ProtectedRouteForUser = (children) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

//protected route for admin

const ProtectedRouteForAdmin = () => {
  const admin = JSON.parse(localStorage.getItem("user"));
  if (users.user) {
  } else {
  }
};
