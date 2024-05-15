import React from "react";
const ProductCart: React.FC = () => {
  return (
    <div className="col-12 col-md-7">
      <ul className="list-group list-group-lg list-group-flush-x mb-6">
        <li className="list-group-item">
          <div className="row align-items-center">
            <div className="col-3">
              <a href="product.html">
                <img src="assets/img/products/sofa3_1.jpg" alt="..." className="img-fluid" />
              </a>
            </div>
            <div className="col">
              <div className="d-flex mb-2 fw-bold">
                <a className="text-body" href="product.html">
                  Cotton floral print
                </a>
                <span className="ms-auto">$40.00</span>
              </div>

              <p className="mb-7 fs-sm text-muted">
                Color: Red
              </p>

              <div className="d-flex align-items-center">
                <select className="form-select form-select-xxs w-auto" title="select">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                </select>

                <a className="fs-xs text-gray-400 ms-auto" href="#!">
                  <i className="fe fe-x"></i> Remove
                </a>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <div className="row align-items-center">
            <div className="col-3">
              <a href="product.html">
                <img src="assets/img/products/sofa1_1.jpg" alt="..." className="img-fluid" />
              </a>
            </div>
            <div className="col">
              <div className="d-flex mb-2 fw-bold">
                <a className="text-body" href="product.html">
                  Suede cross body Bag
                </a>
                <span className="ms-auto">$49.00</span>
              </div>

              <p className="mb-7 fs-sm text-muted">Color: Brown</p>
              <div className="d-flex align-items-center">
                <select className="form-select form-select-xxs w-auto" title="select">
                  <option value="1">1</option>
                  <option value="1">2</option>
                  <option value="1">3</option>
                </select>

                <a className="fs-xs text-gray-400 ms-auto" href="#!">
                  <i className="fe fe-x"></i> Remove
                </a>
              </div>
            </div>
          </div>
        </li>
      </ul>

      <div className="row align-items-end justify-content-between mb-10 mb-md-0">
        <div className="col-12 col-md-7">
          <form className="mb-7 mb-md-0">
            <label className="form-label fs-sm fw-bold" htmlFor="cartCouponCode">
              Coupon code:
            </label>
            <div className="row row gx-5">
              <div className="col">
                <input
                  className="form-control form-control-sm"
                  id="cartCouponCode"
                  type="text"
                  placeholder="Enter coupon code*"
                />
              </div>
              <div className="col-auto">
                <button className="btn btn-sm btn-dark" type="submit">
                  Apply
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="col-12 col-md-auto">
          <button className="btn btn-sm btn-outline-dark">Update Cart</button>
        </div>
      </div>
    </div>
  );
};
export default ProductCart;
