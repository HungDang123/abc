import React from "react";
import FormCheckout from "./components/FormCheckout";
import TotalCheckout from "./components/TotalCheckout";
const Checkout: React.FC = () => {
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
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="shopping-cart.html">
                    Shopping Cart
                  </a>
                </li>
                <li className="breadcrumb-item active">Checkout</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="mb-4">Checkout</h3>
              <p className="mb-10">
                Already have an account?
                <a className="fw-bold text-reset" href="#!">
                  Click here to login
                </a>
              </p>
            </div>
          </div>
          <div className="row">
            <FormCheckout />
            <TotalCheckout />
          </div>
        </div>
      </section>
      ;
    </div>
  );
};
export default Checkout;
