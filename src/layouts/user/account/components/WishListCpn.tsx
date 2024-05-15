import React from "react";
import { Link } from "react-router-dom";
import product from "../../../../models/Product";

const products: product[] = [
  new product(
    "1",
    "Bàn nước Fence",
    ["Bàn nước", "Phòng khách "],
    200000,
    30000,
    ["assets/img/products/table1_1.jpg", "assets/img/products/table1_2.jpg"],
    1
  ),
  new product(
    "2",
    "Sofa Bolero 3 chỗ + Đôn M3 vải MB 40-15",
    ["Phòng khách", "Sofa"],
    350000,
    40000,
    ["assets/img/products/sofa2_1.jpg", "assets/img/products/sofa2_2.jpg"],
    2
  ),
  new product(
    "3",
    "Sofa Coastal 1 chỗ vải vàng",
    ["Phòng khách", "Sofa"],
    500000,
    60000,
    ["assets/img/products/sofa4_1.jpg", "assets/img/products/sofa4_2.jpg"],
    3
  ),
  new product(
    "4",
    "Nệm Sen Việt 1m8",
    ["Nệm", "Phòng ngủ"],
    500000,
    70000,
    [
      "assets/img/products/mattress1_1.jpg",
      "assets/img/products/mattress1_2.jpg",
    ],
    4
  ),
  new product(
    "5",
    "Sofa 2 chỗ Tết vải vact10499",
    ["Phòng khách", "Sofa"],
    500000,
    80000,
    ["assets/img/products/sofa1_1.jpg", "assets/img/products/sofa1_2.jpg"],
    5
  ),
  // Thêm các sản phẩm khác ở đây nếu cần
];

const WishlistCpn: React.FC = () => {
  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      <div className="row">
        {products.map((product) => (
          <div className="col-6 col-md-4">
            <div className="card mb-7">
              <div className="card-img">
                <button
                  className="btn btn-xs btn-circle btn-white-primary card-action card-action-end"
                  title="Close"
                >
                  <i className="fe fe-x"></i>
                </button>

                <Link to={`/furniture/${product.id}`}>
                  <button
                    className="btn btn-xs w-100 btn-dark card-btn"
                    data-bs-toggle="modal"
                    data-bs-target="#modalProduct"
                  >
                    <i className="fe fe-eye me-2 mb-1"></i> Quick View
                  </button>
                </Link>

                <img
                  className="card-img-top"
                  src={product.image[0]}
                  alt={product.name}
                />
              </div>

              <div className="card-body fw-bold text-center">
                <a className="text-body" href="product.html">
                  {product.name}
                </a>
                <br />
                <span className="text-muted">${product.price}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <nav className="d-flex justify-content-center justify-content-md-end">
        <ul className="pagination pagination-sm text-gray-400">
          <li className="page-item">
            <a className="page-link page-link-arrow" href="#">
              <svg
                className="svg-inline--fa fa-caret-left"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-left"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"
                ></path>
              </svg>
              {/* <!-- <i className="fa fa-caret-left"></i> Font Awesome fontawesome.com --> */}
            </a>
          </li>
          <li className="page-item active">
            <a className="page-link" href="#">
              1
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              2
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              3
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              4
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              5
            </a>
          </li>
          <li className="page-item">
            <a className="page-link" href="#">
              6
            </a>
          </li>
          <li className="page-item">
            <a className="page-link page-link-arrow" href="#">
              <svg
                className="svg-inline--fa fa-caret-right"
                aria-hidden="true"
                focusable="false"
                data-prefix="fas"
                data-icon="caret-right"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 256 512"
                data-fa-i2svg=""
              >
                <path
                  fill="currentColor"
                  d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"
                ></path>
              </svg>
              {/* <!-- <i className="fa fa-caret-right"></i> Font Awesome fontawesome.com --> */}
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default WishlistCpn;
