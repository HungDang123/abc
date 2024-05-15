import React from "react";
import product from "../../../../models/Product";
import renderStar from "../../../../utils/Stars";

interface productProps {
  product: product;
}
const Detail: React.FC<productProps> = ({ product }) => {
  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="row">
              <div className="col-12 col-md-6">
                {/* <!-- Card --> */}
                <div className="card">
                  {/* <!-- Badge --> */}
                  <div className="badge bg-primary card-badge text-uppercase">
                    Sale
                  </div>

                  {/* <!-- Slider --> */}
                  <div
                    className="mb-2 flickity-enabled is-fade"
                    data-flickity='{"draggable": false, "fade": true}'
                    id="productSlider"
                    tabIndex={0}
                  >
                    {/* <!-- Item --> */}

                    {/* <!-- Item --> */}

                    {/* <!-- Item --> */}

                    <div
                      className="flickity-viewport"
                      style={{ height: "300.963px" }}
                    >
                      <div
                        className="flickity-slider"
                        style={{ transform: "translateX(0%)" }}
                      >
                        <a
                          href="#"
                          data-bigpicture={{ imgSrc: product.image[0] }}
                          className="flickity-cell is-selected"
                          style={{ transform: "translateX(0%)", opacity: "1" }}
                        >
                          <img
                            src={"../" + product.image[1]}
                            alt="..."
                            className="card-img-top"
                          />
                        </a>
                        <a
                          href="#"
                          data-bigpicture={{ imgSrc: product.image[0] }}
                          className="flickity-cell"
                          aria-hidden="true"
                          style={{ transform: "translateX(0%)", opacity: "0" }}
                        >
                          <img
                            src={"../" + product.image[1]}
                            alt="..."
                            className="card-img-top"
                          />
                        </a>
                        <a
                          href="#"
                          data-bigpicture={{ imgSrc: product.image[0] }}
                          className="flickity-cell"
                          aria-hidden="true"
                          style={{ transform: "translateX(0%)", opacity: "0" }}
                        >
                          <img
                            src={"../" + product.image[1]}
                            alt="..."
                            className="card-img-top"
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* <!-- Slider --> */}
                <div
                  className="flickity-nav mx-n2 mb-10 mb-md-0 flickity-enabled is-draggable"
                  data-flickity='{"asNavFor": "#productSlider", "contain": true, "wrapAround": false}'
                  tabIndex={0}
                >
                  {/* <!-- Item --> */}

                  {/* <!-- Item --> */}

                  {/* <!-- Item --> */}

                  <div className="flickity-viewport" style={{ height: "97px" }}>
                    <div
                      className="flickity-slider"
                      style={{ transform: "translateX(0%)" }}
                    >
                      <div
                        className="col-12 px-2 flickity-cell is-selected is-nav-selected"
                        style={{
                          maxWidth: "113px",
                          transform: "translateX(0%)",
                        }}
                      >
                        {/* <!-- Image --> */}
                        <div
                          className="ratio ratio-1x1 bg-cover"
                          style={{
                            backgroundImage: `url(../${product.image[0]})`,
                          }}
                        ></div>
                      </div>
                      <div
                        className="col-12 px-2 flickity-cell"
                        style={{
                          maxWidth: "113px",
                          transform: "translateX(100%)",
                        }}
                        aria-hidden="true"
                      >
                        {/* <!-- Image --> */}
                        <div
                          className="ratio ratio-1x1 bg-cover"
                          style={{
                            backgroundImage: `url(../${product.image[0]})`,
                          }}
                        ></div>
                      </div>
                      <div
                        className="col-12 px-2 flickity-cell"
                        style={{
                          maxWidth: "113px",
                          transform: "translateX(200%)",
                        }}
                        aria-hidden="true"
                      >
                        {/* <!-- Image --> */}
                        <div
                          className="ratio ratio-1x1 bg-cover"
                          style={{
                            backgroundImage: `url(../${product.image[1]})`,
                          }}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 ps-lg-10">
                <h3 className="mb-2">{product.name}</h3>
                <div className="detail-vote">
                     <a className="sale-star arrow" href="">
                        <ul>
                           {renderStar(product.rating)}
                        </ul>
                        <span>{product.rating}</span>
                        <span>(undifined đánh giá)</span>
                     </a>
                     <span className="cl-gray">Đã bán undifined</span>
                  </div>
                {/* <!-- Price --> */}
                <div className="mb-7">
                  <span className="fs-lg fw-bold text-gray-350 text-decoration-line-through">
                    ${product.originPrice}
                  </span>
                  <span className="ms-1 fs-5 fw-bolder text-primary">
                    ${product.price}
                  </span>
                  <span className="fs-sm ms-1">(In Stock)</span>
                </div>
                <div className="row gx-5 float-s mb-5">
                  <div className="d-flex align-items-center">
                    <b className="fs-6 me-2">Kích thước</b>{" "}
                    <span className="border border-1 ps-2 pe-2">
                      D800 - R800 - C670 mm
                    </span>{" "}
                  </div>
                </div>
                <div className="row gx-5 float-s">
                  <div className="d-flex align-items-center">
                    <p>Mã: {product.id}</p>
                  </div>
                </div>
                <div className="row gx-5 float-s">
                  <div className="d-flex align-items-center">
                    <p>
                      Danh mục:{" "}
                      {product.category[0] + ", " + product.category[1]}
                    </p>
                  </div>
                </div>
                {/* <!-- Form --> */}
                <form>
                  <div className="row gx-5 mb-7">
                    <div className="col-12 col-lg">
                      <div className="quantity">
                        <button
                          className="minus-btn"
                          type="button"
                          name="button"
                        >
                          -
                        </button>
                        <input type="text" name="quantity" value={1} min={1}  title="plus"/>
                        <button
                          className="plus-btn"
                          type="button"
                          name="button"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className="col-12 col-lg">
                      <button type="submit" className="btn w-100 btn-dark mb-2">
                        Add to Cart <i className="fe fe-shopping-cart ms-2"></i>
                      </button>
                    </div>
                    <div className="col-12 col-lg-auto">
                      {/* <!-- Wishlist --> */}
                      <button
                        className="btn btn-outline-dark w-100 mb-2"
                        data-toggle="button"
                      >
                        Wishlist <i className="fe fe-heart ms-2"></i>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Detail;
