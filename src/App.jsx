import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Pages/Home/Home";
import MyState from "./Context/Data/myState";
import Order from "./Pages/Order/Order";
import NoPage from "./Pages/Nopage/Nopage";
import Cart from "./Pages/Cart/Cart";
import Dashboard from "./Pages/Admin/Dashboard/Dashboard";
import ProductInfo from "./Pages/Productinfo/ProductInfo";
import Login from "./Pages/Registration/Login";
import Signup from "./Pages/Registration/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AddProduct from "./Pages/Admin/Page/AddProduct";
import UpdateProduct from "./Pages/Admin/Page/UpdateProduct";

import ProductCard from "./Components/ProductCard/ProductCard";

function App() {
  return (
    <MyState>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/productcard" element={<ProductCard />} />
          <Route
            path="/order"
            element={
              <ProtectedRoutes>
                <Order />
              </ProtectedRoutes>
            }
          />

          <Route path="/cart" element={<Cart />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoutesForAdmin>
                <Dashboard />
              </ProtectedRoutesForAdmin>
            }
          />
          <Route path="/productinfo/:id" element={<ProductInfo />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          <Route
            path="/addproduct"
            element={
              <ProtectedRoutesForAdmin>
                <AddProduct />
              </ProtectedRoutesForAdmin>
            }
          />

          <Route
            path="/updateproduct"
            element={
              <ProtectedRoutesForAdmin>
                <UpdateProduct />
              </ProtectedRoutesForAdmin>
            }
          />
          {/* <Route path="/*" element={<NoPage />} /> */}
        </Routes>
        <ToastContainer />
      </Router>
    </MyState>
  );
}

export default App;

export const ProtectedRoutes = ({ children }) => {
  if (localStorage.getItem("user")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};

export const ProtectedRoutesForAdmin = ({ children }) => {
  const admin = JSON.parse(localStorage.getItem("user"));
  console.log(admin.user.email);
  if (admin.user.email === "aditya@gmail.com") {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
