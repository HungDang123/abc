import React from "react";
const TotalCheckout: React.FC = () => {
  return (
    <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
      <h6 className="mb-7">Order Items (3)</h6>
      <hr className="my-7" />
      <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
        <li className="list-group-item">
          <div className="row align-items-center">
            <div className="col-4">
              <a href="product.html">
                <img src="assets/img/products/product-6.jpg" alt="..." className="img-fluid" />
              </a>
            </div>
            <div className="col">
              <p className="mb-4 fs-sm fw-bold">
                <a className="text-body" href="product.html">
                  Cotton floral print Dress
                </a>
                <br />
                <span className="text-muted">$40.00</span>
              </p>
              <div className="fs-sm text-muted">
                Size: M <br />
                Color: Red
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row align-items-center">
            <div className="col-4">
              <a href="product.html">
                <img src="assets/img/products/product-10.jpg" alt="..." className="img-fluid" />
              </a>
            </div>
            <div className="col">
              <p className="mb-4 fs-sm fw-bold">
                <a className="text-body" href="product.html">
                  Suede cross body Bag
                </a>
                <br />
                <span className="text-muted">$49.00</span>
              </p>
              <div className="fs-sm text-muted">Color: Brown</div>
            </div>
          </div>
        </li>
      </ul>
      <div className="card mb-9 bg-light">
        <div className="card-body">
          <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
            <li className="list-group-item d-flex">
              <span>Subtotal</span>
              <span className="ms-auto fs-sm">$89.00</span>
            </li>
            <li className="list-group-item d-flex">
              <span>Tax</span> <span className="ms-auto fs-sm">$00.00</span>
            </li>
            <li className="list-group-item d-flex">
              <span>Shipping</span>
              <span className="ms-auto fs-sm">$8.00</span>
            </li>
            <li className="list-group-item d-flex fs-lg fw-bold">
              <span>Total</span> <span className="ms-auto">$97.00</span>
            </li>
          </ul>
        </div>
      </div>
      <p className="mb-7 fs-xs text-gray-500">
        Your personal data will be used to process your order, support your experience throughout
        this website, and htmlFor other purposes described in our privacy policy.
      </p>
      <button className="btn w-100 btn-dark">Place Order</button>
    </div>
  );
};
export default TotalCheckout;
