import { useEffect, useState } from "react";
import product from "../models/Product";

type Visibility = "visible" | "hidden" | "collapse";

// Rename to start with "use" if it's intended to be a custom hook
const RenderCart = (props: { product: product[]; v: boolean }) => {
  // Capitalize the function name
  const [vi, setVisibility] = useState<Visibility>("hidden");
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (props.product.length !== 0) {
      let sum = 0;
      props.product.forEach((item) => {
        sum += item.price;
      });
      setTotal(sum);
    }if(props.v){
      setVisibility("visible")
    }
  },[props.product,props.v]);

  return (
    <div
      className="offcanvas offcanvas-end show"
      id="modalShoppingCart"
      tabIndex={-1}
      style={{ visibility: vi }}
      aria-modal="true"
      role="dialog"
    >
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
        onClick={() => {
          setVisibility("hidden");
        }}
      >
        <i className="fe fe-x" aria-hidden="true"></i>
      </button>

      <div className="offcanvas-header lh-fixed fs-lg">
        <strong className="mx-auto">Your Cart ({props.product.length})</strong>
      </div>

      <ul className="list-group list-group-lg list-group-flush">
        {props.product.map((product) => (
          <li className="list-group-item">
            <div className="row align-items-center">
              <div className="col-4">
                <a href="#">
                  <img className="img-fluid" src={product.image[0]} alt="..." />
                </a>
              </div>
              <div className="col-8">
                <p className="fs-sm fw-bold mb-6">
                  <a className="text-body" href="#">
                    {product.name}
                  </a>
                  <br />
                  <span className="text-muted">${product.price}</span>
                </p>

                <div className="d-flex align-items-center">
                  <select className="form-select form-select-xxs w-auto">
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
        ))}
      </ul>

      <div className="offcanvas-footer justify-between lh-fixed fs-sm bg-light mt-auto">
        <strong>Subtotal</strong> <strong className="ms-auto">${total}</strong>
      </div>
      <div className="offcanvas-body">
        <a className="btn w-100 btn-dark" href="./checkout.html">
          Continue to Checkout
        </a>
        <a
          className="btn w-100 btn-outline-dark mt-2"
          href="./shopping-cart.html"
        >
          View Cart
        </a>
      </div>

      <div className="d-none">
        <button
          type="button"
          className="btn-close"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        >
          <i className="fe fe-x" aria-hidden="true"></i>
        </button>

        <div className="offcanvas-header lh-fixed fs-lg">
          <strong className="mx-auto">Your Cart (0)</strong>
        </div>

        <div className="offcanvas-body flex-grow-0 my-auto">
          <h6 className="mb-7 text-center">Your cart is empty 😞</h6>

          <a className="btn w-100 btn-outline-dark" href="#!">
            Continue Shopping
          </a>
        </div>
      </div>
    </div>
  );
};
export default RenderCart;
