import React, { useState } from "react";
import "./App.css";
import Navbar from "./layouts/user/header_footer/Navbar";
import HomePage from "./layouts/user/homepages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FurnitureDetail from "./layouts/user/detailProduct/FurnitureDetail";
import Footer from "./layouts/user/header_footer/Footer";
import product from "./models/Product";
import AccountOrder from "./layouts/user/account/AccountOrder";
import Wishlist from "./layouts/user/account/WishList";
import Address from "./layouts/user/account/Address";
import NotFoundPage from "./layouts/user/homepages/NotFoundPage";
import Shop from "./layouts/user/shop/List";
import Login from "./layouts/user/login/Login";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext";
import Cart from "./layouts/user/cart/Cart";
import Checkout from "./layouts/user/checkout/Checkout";

function App() {
  const [product, setProduct] = useState<product[]>([]);
  return (
    <div className="App">
      <BrowserRouter>
        <AuthProvider>
          <Navbar product={product} />
          <Routes>
            <Route
              path="/"
              element={<HomePage product={product} setProduct={setProduct} />}
            />
            <Route path="/furniture/:productId" element={<FurnitureDetail />} />
            <Route path="/account-orders" element={<AccountOrder />} />
            <Route path="/account-wishlist" element={<Wishlist />} />
            <Route path="/account-address" element={<Address />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route Component={NotFoundPage} />
            <Route path="/login" element={<Login />} />
          </Routes>
          <Footer />
        </AuthProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
