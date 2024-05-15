import React, { useState } from "react";
import "./App.css";
import Navbar from "./layouts/header_footer/Navbar";
import HomePage from "./layouts/homepages/Homepage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import FurnitureDetail from "./layouts/detailProduct/FurnitureDetail";
import Footer from "./layouts/header_footer/Footer";
import product from "./models/Product";
import AccountOrder from "./layouts/account/AccountOrder";
import Wishlist from "./layouts/account/WishList";
import Address from "./layouts/account/Address";
import NotFoundPage from "./layouts/homepages/NotFoundPage";
import Shop from "./layouts/shop/List";
import Cart from "./layouts/Cart/Cart";
import Checkout from "./layouts/Checkout/Checkout";
import Login from "./layouts/login/Login";
import "react-toastify/dist/ReactToastify.css";
import { AuthProvider } from "./contexts/AuthContext";

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
