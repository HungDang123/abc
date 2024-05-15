import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {Offcanvas } from "react-bootstrap";
import product from "../../../models/Product";
import { useAuth } from "../../../contexts/AuthContext";
interface NavbarProps {
  product: product[];
}
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
  new product(
    "6",
    "Sofa ONA HIM 1 chỗ da nâu S3",
    ["Armchair", "Sofa "],
    200000,
    30000,
    ["assets/img/products/sofa5_1.jpg", "assets/img/products/sofa5_2.jpg"],
    4
  ),
  new product(
    "7",
    "Sofa Bolero 3 chỗ + Đôn M3 vải xám MB4010",
    ["Phòng khách", "Sofa"],
    350000,
    40000,
    ["assets/img/products/sofa3_1.jpg", "assets/img/products/sofa3_2.jpg"],
    3
  ),
  new product(
    "8",
    "bàn nước bar 200x75 75167k",
    ["Bàn nước", "Phòng khách "],
    200000,
    30000,
    ["assets/img/products/table3_1.jpg", "assets/img/products/table3_2.jpg"],
    1
  ),
  // Thêm các sản phẩm khác ở đây nếu cần
];
const Navbar: React.FC<NavbarProps> = ({ product }) => {
  const [showCart, setShowCart] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [total, setTotal] = useState(0);
  const [category, setCategory] = useState("");

  const { isLoggedIn } = useAuth();
  console.log(isLoggedIn);

  const handleShowCart = () => setShowCart(true);
  const handleCloseCart = () => setShowCart(false);

  const handleShowSearch = () => setShowSearch(true);
  const handleCloseSearch = () => setShowSearch(false);
  useEffect(() => {
    let sum = product.reduce((acc, item) => acc + item.price, 0);
    setTotal(sum);
  }, [product]);

  return (
    <div>
      <Fragment>
        <nav className="navbar navbar-expand-lg navbar-light bg-white">
          <div className="container">
           <Link to={"/"}>
           <a className="navbar-brand" >
              {" "}
              Shopper.{" "}
            </a></Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
              aria-controls="navbarCollapse"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarCollapse">
              <ul className="navbar-nav mx-auto">
                <li className="nav-item dropdown">
                 <Link to={"/"}>
                 <a className="nav-link" data-bs-toggle="dropdown" >
                    Home
                  </a></Link>

                  <div className="dropdown-menu">
                    <div className="card card-lg">
                      <div className="card-body">
                        <ul className="list-styled fs-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./index">
                              Default
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-classNameic"
                            >
                              classNameic
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-fashion"
                            >
                              Fashion
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-boxed"
                            >
                              Boxed
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-simple"
                            >
                              Simple
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-asymmetric"
                            >
                              Asymmetric
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-sidenav"
                            >
                              Sidenav
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./index-landing"
                            >
                              Landing
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown position-static">
                  <a className="nav-link" data-bs-toggle="dropdown" href="#">
                    Catalog
                  </a>

                  <div className="dropdown-menu w-100">
                    <div className="mb-2 mb-lg-0 border-bottom-lg">
                      <div className="container">
                        <div className="row">
                          <div className="col-12">
                            <nav className="nav nav-tabs nav-overflow fs-xs border-bottom border-bottom-lg-0">
                              <a
                                className="nav-link text-uppercase active"
                                data-bs-toggle="tab"
                                href="#navTab"
                              >
                                Women
                              </a>
                              <a
                                className="nav-link text-uppercase"
                                data-bs-toggle="tab"
                                href="#navTab"
                              >
                                Men
                              </a>
                              <a
                                className="nav-link text-uppercase"
                                data-bs-toggle="tab"
                                href="#navTab"
                              >
                                Kids
                              </a>
                            </nav>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="card card-lg">
                      <div className="card-body">
                        <div className="tab-content">
                          <div
                            className="tab-pane fade show active"
                            id="navTab"
                          >
                            <div className="container">
                              <div className="row">
                                <div className="col-6 col-md">
                                  <div className="mb-5 fw-bold">Clothing</div>

                                  <ul className="list-styled mb-6 mb-md-0 fs-sm">
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        All Clothing
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Blouses &amp; Shirts
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Coats &amp; Jackets
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Dresses
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Hoodies &amp; Sweats
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Denim
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Jeans
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Jumpers &amp; Cardigans
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Leggings
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6 col-md">
                                  <div className="mb-5 fw-bold">
                                    Shoes &amp; Boots
                                  </div>

                                  <ul className="list-styled mb-6 mb-md-0 fs-sm">
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        All Shoes &amp; Boots
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Branded Shoes
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Boots
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Heels
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Trainers
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Sandals
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Shoes
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Wide Fit Shoes
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6 col-md">
                                  <div className="mb-5 fw-bold">
                                    Bags &amp; Accessories
                                  </div>

                                  <ul className="list-styled mb-0 fs-sm">
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        All Bags &amp; Accessories
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Accessories
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Bags &amp; Purses
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Luggage
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Belts
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Hats
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Hair Accessories
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Jewellery
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Travel Accessories
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-6 col-md">
                                  <div className="mb-5 fw-bold">
                                    Collections
                                  </div>

                                  <ul className="list-styled mb-0 fs-sm">
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        All Collections
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Occasionwear
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Going Out
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Workwear
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Holiday Shop
                                      </a>
                                    </li>
                                    <li className="list-styled-item">
                                      <a
                                        className="list-styled-link"
                                        href="./shop"
                                      >
                                        Jean Fit Guide
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                                <div className="col-4 d-none d-lg-block">
                                  <div className="card">
                                    <img
                                      className="card-img"
                                      src="./assets/img/products/product-110.jpg"
                                      alt="..."
                                    />

                                    <div className="card-img-overlay bg-dark-0 bg-hover align-items-center">
                                      <div className="text-center">
                                        <a
                                          className="btn btn-white stretched-link"
                                          href="./shop"
                                        >
                                          Shop Sweaters
                                          <i className="fe fe-arrow-right ms-2"></i>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <Link to={`shop`}>
                    <a className="nav-link" data-bs-toggle="dropdown" href="#">
                      Shop
                    </a>
                  </Link>

                  <div className="dropdown-menu" style={{ minWidth: "650px" }}>
                    <div className="card card-lg">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <div className="mb-5 fw-bold">Shop</div>

                            <ul className="list-styled mb-7 fs-sm">
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shop"
                                >
                                  Default
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shop-topbar"
                                >
                                  Topbar
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shop-collapse"
                                >
                                  Collapse
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shop-simple"
                                >
                                  Simple
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shop-masonry"
                                >
                                  Masonry
                                </a>
                              </li>
                            </ul>

                            <div className="mb-5 fw-bold">Product</div>

                            <ul className="list-styled fs-sm">
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./product"
                                >
                                  Default
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./product-images-left"
                                >
                                  Images Left
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./product-image-grid"
                                >
                                  Image Grid
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./product-image-slider"
                                >
                                  Image Slider
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./product-images-stacked"
                                >
                                  Images Stacked
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col">
                            <div className="mb-5 fw-bold">Support</div>

                            <ul className="list-styled mb-7 fs-sm">
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shopping-cart"
                                >
                                  Shopping Cart
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./checkout"
                                >
                                  Checkout
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./order-completed"
                                >
                                  Order Completed
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./shipping-and-returns"
                                >
                                  Shipping &amp; Returns
                                </a>
                              </li>
                            </ul>

                            <div className="mb-5 fw-bold">Account</div>

                            <ul className="list-styled fs-sm">
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-order"
                                >
                                  Order
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-orders"
                                >
                                  Orders
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-wishlist"
                                >
                                  Wishlist
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-personal-info"
                                >
                                  Personal Info
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-address"
                                >
                                  Addresses
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-address-edit"
                                >
                                  Addresses: New
                                </a>
                              </li>
                            </ul>
                          </div>
                          <div className="col">
                            <ul className="list-styled mb-7 fs-sm">
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-payment"
                                >
                                  Payment
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-payment-edit"
                                >
                                  Payment: New
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./account-payment-choose"
                                >
                                  Payment: Choose
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  href="./auth"
                                >
                                  Auth
                                </a>
                              </li>
                            </ul>

                            <div className="mb-5 fw-bold">Modals</div>

                            <ul className="list-styled fs-sm">
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="modal"
                                  href="#modalNewsletterHorizontal"
                                >
                                  Newsletter: Horizontal
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="modal"
                                  href="#modalNewsletterVertical"
                                >
                                  Newsletter: Vertical
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="modal"
                                  href="#modalProduct"
                                >
                                  Product
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="offcanvas"
                                  href="#modalSearch"
                                >
                                  Search
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="offcanvas"
                                  href="#modalShoppingCart"
                                >
                                  Shopping Cart
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="modal"
                                  href="#modalSizeChart"
                                >
                                  Size Chart
                                </a>
                              </li>
                              <li className="list-styled-item">
                                <a
                                  className="list-styled-link"
                                  data-bs-toggle="modal"
                                  href="#modalWaitList"
                                >
                                  Wait List
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" data-bs-toggle="dropdown" href="#">
                    Pages
                  </a>

                  <div className="dropdown-menu">
                    <div className="card card-lg">
                      <div className="card-body">
                        <ul className="list-styled fs-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./about">
                              About
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./contact-us"
                            >
                              Contact Us
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./store-locator"
                            >
                              Store Locator
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./faq">
                              FAQ
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./coming-soon"
                            >
                              Coming Soon
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="/">
                              404
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" data-bs-toggle="dropdown" href="#">
                    Blog
                  </a>

                  <div className="dropdown-menu">
                    <div className="card card-lg">
                      <div className="card-body">
                        <ul className="list-styled fs-sm">
                          <li className="list-styled-item">
                            <a className="list-styled-link" href="./blog">
                              Blog
                            </a>
                          </li>
                          <li className="list-styled-item">
                            <a
                              className="list-styled-link"
                              href="./blog-post"
                            >
                              Blog Post
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link">
                    Docs
                  </a>
                </li>
              </ul>

              <ul className="navbar-nav flex-row">
                <li className="nav-item">
                  <a
                    className="nav-link"
                    data-bs-toggle="offcanvas"
                    href="#modalSearch"
                    onClick={handleShowSearch}
                  >
                    <i className="fe fe-search"></i>
                  </a>
                </li>
                <li className="nav-item ms-lg-n4">
                  {isLoggedIn ? (
                    <Link to={"./account-orders"}>
                      <a className="nav-link">
                        <i className="fe fe-user"></i>
                      </a>
                    </Link>
                  ) : (
                    <Link to={"./login"}>
                      <a className="nav-link">
                        <i className="fe fe-user"></i>
                      </a>
                    </Link>
                  )}
                </li>
                <li className="nav-item ms-lg-n4">
                  {isLoggedIn ? (
                    <Link to={"./account-wishlist"}>
                      <a className="nav-link">
                        <i className="fe fe-heart"></i>
                      </a>{" "}
                    </Link>
                  ) : (
                    <Link to={"./login"}>
                      {" "}
                      <a className="nav-link">
                        <i className="fe fe-heart"></i>
                      </a>
                    </Link>
                  )}
                </li>
                <li className="nav-item ms-lg-n4">
                  <a
                    className="nav-link"
                    data-bs-toggle="offcanvas"
                    href="#modalShoppingCart"
                    onClick={handleShowCart}
                  >
                    <span data-cart-items={product.length}>
                      <i className="fe fe-shopping-cart"></i>
                    </span>
                  </a>
                </li>
              </ul>
              <Offcanvas
                show={showCart}
                onHide={handleCloseCart}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    Your Cart ({product.length})
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <ul className="list-group list-group-lg list-group-flush">
                    {product.map((item) => (
                      <li className="list-group-item" key={item.id}>
                        <div className="row align-items-center">
                          <div className="col-4">
                            <a href="#">
                              <img
                                className="img-fluid"
                                src={item.image[0]}
                                alt="..."
                              />
                            </a>
                          </div>
                          <div className="col-8">
                            <p className="fs-sm fw-bold mb-6">
                              <a className="text-body" href="#">
                                {item.name}
                              </a>
                              <br />
                              <span className="text-muted">${item.price}</span>
                            </p>
                            <div className="d-flex align-items-center">
                              <select
                                className="form-select form-select-xxs w-auto"
                                title="select"
                              >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select>
                              <a
                                className="fs-xs text-gray-400 ms-auto"
                                href="#!"
                              >
                                <i className="fe fe-x"></i> Remove
                              </a>
                            </div>
                          </div>
                        </div>
                      </li>
                    ))}
                  </ul>
                </Offcanvas.Body>
                <div className="offcanvas-footer justify-between lh-fixed fs-sm bg-light mt-auto w-100">
                  <strong>Subtotal</strong>
                  <strong className="ms-auto">${total}</strong>
                </div>
                <div className="offcanvas-body">
                  <a className="btn w-100 btn-dark" href="./checkout">
                    Continue to Checkout
                  </a>
                  <a
                    className="btn w-100 btn-outline-dark mt-2"
                    href="./cart"
                  >
                    View Cart
                  </a>
                </div>
              </Offcanvas>
              <Offcanvas
                show={showSearch}
                onHide={handleCloseSearch}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title>
                    <div className="offcanvas-header lh-fixed fs-lg">
                      <strong className="mx-auto">Search Products</strong>
                    </div>
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                  <div className="offcanvas-body">
                    <form>
                      <div className="form-group">
                        <label className="visually-hidden">Categories:</label>
                        <select
                          className="form-select"
                          id="modalSearchCategories"
                          title="select"
                          onChange={(e) => setCategory(e.target.value)}
                        >
                          <option>All Categories</option>
                          <option>Phòng khách</option>
                          <option>Sofa</option>
                          <option>Phòng ngủ</option>
                          <option>Đệm</option>
                        </select>
                      </div>
                      <div className="input-group input-group-merge">
                        <input
                          className="form-control"
                          type="search"
                          placeholder="Search"
                        />
                        <div className="input-group-append">
                          <button
                            className="btn btn-outline-border"
                            type="submit"
                            title="search"
                          >
                            <i className="fe fe-search"></i>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="offcanvas-body border-top fs-sm">
                    <p>Search Results:</p>

                    {products.map((prod) => (
                      <div
                        className="row align-items-center position-relative mb-5"
                        key={prod.id}
                      >
                        <Link to={`/furniture/${prod.id}`}>
                          <div className="col-4 col-md-3" title="image">
                            <img
                              className="img-fluid"
                              src={prod.image[0]}
                              alt="..."
                            />
                          </div>
                          <div className="col position-static">
                            <p className="mb-0 fw-bold">
                              <a className="stretched-link text-body">
                                {prod.name}
                              </a>
                              <br />
                              <span className="text-muted">${prod.price}</span>
                            </p>
                          </div>
                        </Link>
                      </div>
                    ))}
                    <a
                      className="btn btn-link px-0 text-reset"
                      href="./shop"
                    >
                      View All <i className="fe fe-arrow-right ms-2"></i>
                    </a>
                  </div>
                </Offcanvas.Body>
              </Offcanvas>
            </div>
          </div>
        </nav>
      </Fragment>
    </div>
  );
};

export default Navbar;
