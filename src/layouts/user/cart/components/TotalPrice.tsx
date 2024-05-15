import React from "react";
import { Link } from "react-router-dom";
const TotaPrice: React.FC = () => {
  return (
    <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
      <div className="card mb-7 bg-light">
        <div className="card-body">
          <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
            <li className="list-group-item d-flex">
              <span>Subtotal</span>
              <span className="ms-auto fs-sm">$89.00</span>
            </li>
            <li className="list-group-item d-flex">
              <span>Tax</span> <span className="ms-auto fs-sm">$00.00</span>
            </li>
            <li className="list-group-item d-flex fs-lg fw-bold">
              <span>Total</span> <span className="ms-auto fs-sm">$89.00</span>
            </li>
            <li className="list-group-item fs-sm text-center text-gray-500">
              Shipping cost calculated at Checkout *
            </li>
          </ul>
        </div>
      </div>

      <Link to={`/checkout`}>
        <a className="btn w-100 btn-dark mb-2" href="checkout.html">
          Proceed to Checkout
        </a>
      </Link>

      <a className="btn btn-link btn-sm px-0 text-body" href="shop.html">
        <i className="fe fe-arrow-left me-2"></i> Continue Shopping
      </a>
    </div>
  );
};
export default TotaPrice;
