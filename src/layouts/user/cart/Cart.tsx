import React from "react";
import ProductCart from "./components/ProductCart";
import TotaPrice from "./components/TotalPrice";
const Cart: React.FC = () => {
  return (
    <div>
      <nav className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ol className="breadcrumb mb-0 fs-xs text-gray-400">
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="index.html">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">Shopping Cart</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h3 className="mb-10 text-center">Shopping Cart</h3>
            </div>
          </div>
          <div className="row">
            <ProductCart />
            <TotaPrice />
          </div>
        </div>
      </section>
    </div>
  );
};
export default Cart;
