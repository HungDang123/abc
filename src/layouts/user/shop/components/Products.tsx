import { Link } from "react-router-dom";
import product from "../../../../models/Product";

interface productProps {
  product: product;
}
const Products: React.FC<productProps> = ({ product }) => {
  return (
    <div className="col-6 col-md-4">
      <div className="card mb-7">
        <div className="badge bg-white text-body card-badge card-badge-start text-uppercase">
          New
        </div>

        <div className="card-img">
          <Link to={`/furniture/${product.id}`}>
            <a className="card-img-hover" href="product.html">
              <img
                className="card-img-top card-img-back"
                src={product.image[0]}
                alt={product.name}
              />
              <img
                className="card-img-top card-img-front"
                src={product.image[1]}
                alt={product.name}
              />
            </a>
          </Link>

          <div className="card-actions">
            <Link to={`/furniture/${product.id}`}>
              <span className="card-action">
                <button
                  className="btn btn-xs btn-circle btn-white-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#modalProduct"
                  title="view"
                >
                  <i className="fe fe-eye"></i>
                </button>
              </span>
            </Link>
            <span className="card-action">
              <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button" title="cart">
                <i className="fe fe-shopping-cart"></i>
              </button>
            </span>
            <span className="card-action">
              <button className="btn btn-xs btn-circle btn-white-primary" data-toggle="button" title="wishlist">
                <i className="fe fe-heart"></i>
              </button>
            </span>
          </div>
        </div>

        <div className="card-body px-0">
          <div className="fs-xs">
            <a className="text-muted" href="shop.html">
              {product.category[0]}
            </a>
          </div>

          <div className="fw-bold">
            <a className="text-body" href="product.html">
              {product.name}
            </a>
          </div>

          <div className="fw-bold text-muted">{product.price}</div>
        </div>
      </div>
    </div>
  );
};
export default Products;
