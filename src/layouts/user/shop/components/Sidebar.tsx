import React from "react";

const Sidebar: React.FC = () => {
  return (
    <div className="col-12 col-md-4 col-lg-3">
      <form className="mb-10 mb-md-0">
        <ul className="nav nav-vertical" id="filterNav">
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
              data-bs-toggle="collapse"
              href="#categoryCollapse"
            >
              Category
            </a>

            <div className="collapse show" id="categoryCollapse">
              <div className="form-group">
                <ul className="list-styled mb-0" id="productsNav">
                  <li className="list-styled-item">
                    <a className="list-styled-link" href="#">
                      {" "}
                      All Products{" "}
                    </a>
                  </li>
                  <li className="list-styled-item">
                    <a
                      className="list-styled-link"
                      data-bs-toggle="collapse"
                      href="#blousesCollapse"
                    >
                      Blouses and Shirts
                    </a>

                    <div className="collapse" id="blousesCollapse" data-bs-parent="#productsNav">
                      <div className="py-4 ps-5">
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="blousesOne" type="checkbox" />
                          <label className="form-check-label" htmlFor="blousesOne">
                            Women Tops, Tees & Blouses
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="blousesTwo" type="checkbox" />
                          <label className="form-check-label" htmlFor="blousesTwo">
                            {" "}
                            Petite{" "}
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="blousesThree" type="checkbox" />
                          <label className="form-check-label" htmlFor="blousesThree">
                            Petite-Size Blouses & Button-Down Shirts
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" id="blousesFour" type="checkbox" />
                          <label className="form-check-label" htmlFor="blousesFour">
                            Women Plus Tops & Tees
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-styled-item">
                    <a className="list-styled-link" data-bs-toggle="collapse" href="#coatsCollapse">
                      Coats and Jackets
                    </a>

                    <div className="collapse" id="coatsCollapse" data-bs-parent="#productsNav">
                      <div className="py-4 ps-5">
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="coatsOne" type="checkbox" />
                          <label className="form-check-label" htmlFor="coatsOne">
                            Coats, Jackets & Vests
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="coatsTwo" type="checkbox" />
                          <label className="form-check-label" htmlFor="coatsTwo">
                            Down Jackets & Parkas
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" id="coatsThree" type="checkbox" />
                          <label className="form-check-label" htmlFor="coatsThree">
                            Wool & Pea Coats Plus-Size
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-styled-item">
                    <a
                      className="list-styled-link"
                      data-bs-toggle="collapse"
                      href="#dressesCollapse"
                      aria-expanded="true"
                    >
                      Dresses
                    </a>

                    <div
                      className="collapse show"
                      id="dressesCollapse"
                      data-bs-parent="#productsNav"
                    >
                      <div className="py-4 ps-5">
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="dressesOne" type="checkbox" />
                          <label className="form-check-label" htmlFor="dressesOne">
                            A-line Dresses
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input
                            className="form-check-input"
                            id="dressesTwo"
                            type="checkbox"
                            checked
                          />
                          <label className="form-check-label" htmlFor="dressesTwo">
                            Shift Dresses
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="dressesThree" type="checkbox" />
                          <label className="form-check-label" htmlFor="dressesThree">
                            Wrap Dresses
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" id="dressesFour" type="checkbox" />
                          <label className="form-check-label" htmlFor="dressesFour">
                            Maxi Dresses
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-styled-item">
                    <a
                      className="list-styled-link"
                      data-bs-toggle="collapse"
                      href="#hoodiesCollapse"
                    >
                      Hoodies and Sweats
                    </a>

                    <div className="collapse" id="hoodiesCollapse" data-bs-parent="#productsNav">
                      <div className="py-4 ps-5">
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="hoodiesOne" type="checkbox" />
                          <label className="form-check-label" htmlFor="hoodiesOne">
                            Activewear
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="hoodiesTwo" type="checkbox" />
                          <label className="form-check-label" htmlFor="hoodiesTwo">
                            Fashion Hoodies & Sweatshirts
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="hoodiesThree" type="checkbox" />
                          <label className="form-check-label" htmlFor="hoodiesThree">
                            Big & Tall Sweatshirts
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" id="hoodiesFour" type="checkbox" />
                          <label className="form-check-label" htmlFor="hoodiesFour">
                            Big & Tall Fashion Hoodies
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-styled-item">
                    <a className="list-styled-link" data-bs-toggle="collapse" href="#denimCollapse">
                      Denim
                    </a>

                    <div className="collapse" id="denimCollapse" data-bs-parent="#productsNav">
                      <div className="py-4 ps-5">
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="denimOne" type="checkbox" />
                          <label className="form-check-label" htmlFor="denimOne">
                            Women Shorts
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="denimTwo" type="checkbox" />
                          <label className="form-check-label" htmlFor="denimTwo">
                            Juniors' Shorts
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="denimThree" type="checkbox" />
                          <label className="form-check-label" htmlFor="denimThree">
                            {" "}
                            Petite{" "}
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" id="denimFour" type="checkbox" />
                          <label className="form-check-label" htmlFor="denimFour">
                            Women Plus Shorts
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-styled-item">
                    <a className="list-styled-link" data-bs-toggle="collapse" href="#jeansCollapse">
                      Jeans
                    </a>

                    <div className="collapse" id="jeansCollapse" data-bs-parent="#productsNav">
                      <div className="py-4 ps-5">
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="jeansOne" type="checkbox" />
                          <label className="form-check-label" htmlFor="jeansOne">
                            {" "}
                            Men Jeans{" "}
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="jeansTwo" type="checkbox" />
                          <label className="form-check-label" htmlFor="jeansTwo">
                            Men Big & Tall Jeans
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="jeansThree" type="checkbox" />
                          <label className="form-check-label" htmlFor="jeansThree">
                            Surf, Skate & Street Clothing
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" id="jeansFour" type="checkbox" />
                          <label className="form-check-label" htmlFor="jeansFour">
                            Men Big & Tall Pants
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-styled-item">
                    <a
                      className="list-styled-link"
                      data-bs-toggle="collapse"
                      href="#jumpersCollapse"
                    >
                      Jumpers and Cardigans
                    </a>

                    <div className="collapse" id="jumpersCollapse" data-bs-parent="#productsNav">
                      <div className="py-4 ps-5">
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="jumpersOne" type="checkbox" />
                          <label className="form-check-label" htmlFor="jumpersOne">
                            Sweaters Plus-Size
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="jumpersTwo" type="checkbox" />
                          <label className="form-check-label" htmlFor="jumpersTwo">
                            Plus Sweaters
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="jumpersThree" type="checkbox" />
                          <label className="form-check-label" htmlFor="jumpersThree">
                            Petite Cardigans
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" id="jumpersFour" type="checkbox" />
                          <label className="form-check-label" htmlFor="jumpersFour">
                            Tops, Tees & Blouses
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-styled-item">
                    <a
                      className="list-styled-link"
                      data-bs-toggle="collapse"
                      href="#legginsCollapse"
                    >
                      Leggings
                    </a>

                    <div className="collapse" id="legginsCollapse" data-bs-parent="#productsNav">
                      <div className="py-4 ps-5">
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="legginsOne" type="checkbox" />
                          <label className="form-check-label" htmlFor="legginsOne">
                            Novelty Leggings
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="legginsTwo" type="checkbox" />
                          <label className="form-check-label" htmlFor="legginsTwo">
                            Novelty Pants & Capris
                          </label>
                        </div>
                        <div className="form-check mb-3">
                          <input className="form-check-input" id="legginsThree" type="checkbox" />
                          <label className="form-check-label" htmlFor="legginsThree">
                            Women Yoga Leggings
                          </label>
                        </div>
                        <div className="form-check">
                          <input className="form-check-input" id="legginsFour" type="checkbox" />
                          <label className="form-check-label" htmlFor="legginsFour">
                            Workout & Training Leggings
                          </label>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
              data-bs-toggle="collapse"
              href="#seasonCollapse"
            >
              Season
            </a>

            <div className="collapse" id="seasonCollapse" data-simplebar-collapse="#seasonGroup">
              <div className="form-group form-group-overflow mb-6" id="seasonGroup">
                <div className="form-check mb-3">
                  <input className="form-check-input" id="seasonOne" type="checkbox" checked />
                  <label className="form-check-label" htmlFor="seasonOne">
                    {" "}
                    Summer{" "}
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" id="seasonTwo" type="checkbox" />
                  <label className="form-check-label" htmlFor="seasonTwo">
                    {" "}
                    Winter{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" id="seasonThree" type="checkbox" />
                  <label className="form-check-label" htmlFor="seasonThree">
                    {" "}
                    Spring & Autumn{" "}
                  </label>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
              data-bs-toggle="collapse"
              href="#sizeCollapse"
            >
              Size
            </a>

            <div className="collapse" id="sizeCollapse" data-simplebar-collapse="#sizeGroup">
              <div className="form-group form-group-overlow mb-6" id="sizeGroup">
                <div className="form-check form-check-inline form-check-size mb-2">
                  <input className="form-check-input" id="sizeOne" type="checkbox" />
                  <label className="form-check-label" htmlFor="sizeOne">
                    {" "}
                    3XS{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline form-check-size mb-2">
                  <input className="form-check-input" id="sizeTwo" type="checkbox" disabled />
                  <label className="form-check-label" htmlFor="sizeTwo">
                    {" "}
                    2XS{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline form-check-size mb-2">
                  <input className="form-check-input" id="sizeThree" type="checkbox" />
                  <label className="form-check-label" htmlFor="sizeThree">
                    {" "}
                    XS{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline form-check-size mb-2">
                  <input className="form-check-input" id="sizeFour" type="checkbox" />
                  <label className="form-check-label" htmlFor="sizeFour">
                    {" "}
                    S{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline form-check-size mb-2">
                  <input className="form-check-input" id="sizeFive" type="checkbox" checked />
                  <label className="form-check-label" htmlFor="sizeFive">
                    {" "}
                    M{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline form-check-size mb-2">
                  <input className="form-check-input" id="sizeSix" type="checkbox" />
                  <label className="form-check-label" htmlFor="sizeSix">
                    {" "}
                    L{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline form-check-size mb-2">
                  <input className="form-check-input" id="sizeSeven" type="checkbox" />
                  <label className="form-check-label" htmlFor="sizeSeven">
                    {" "}
                    XL{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline form-check-size mb-2">
                  <input className="form-check-input" id="sizeEight" type="checkbox" disabled />
                  <label className="form-check-label" htmlFor="sizeEight">
                    {" "}
                    2XL{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline form-check-size mb-2">
                  <input className="form-check-input" id="sizeNine" type="checkbox" />
                  <label className="form-check-label" htmlFor="sizeNine">
                    {" "}
                    3XL{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline form-check-size mb-2">
                  <input className="form-check-input" id="sizeTen" type="checkbox" />
                  <label className="form-check-label" htmlFor="sizeTen">
                    {" "}
                    4XL{" "}
                  </label>
                </div>
                <div className="form-check form-check-inline form-check-size mb-2">
                  <input className="form-check-input" id="sizeEleven" type="checkbox" />
                  <label className="form-check-label" htmlFor="sizeEleven">
                    {" "}
                    One Size{" "}
                  </label>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
              data-bs-toggle="collapse"
              href="#colorCollapse"
            >
              Color
            </a>

            <div className="collapse" id="colorCollapse" data-simplebar-collapse="#colorGroup">
              <div className="form-group form-group-overflow mb-6" id="colorGroup">
                <div className="form-check form-check-color mb-3">
                  <input
                    className="form-check-input"
                    id="colorOne"
                    type="checkbox"
                    style={{ backgroundColor: "black" }}
                  />
                  <label className="form-check-label text-body" htmlFor="colorOne">
                    {" "}
                    Black{" "}
                  </label>
                </div>
                <div className="form-check form-check-color mb-3">
                  <input
                    className="form-check-input"
                    id="colorTwo"
                    type="checkbox"
                    style={{ backgroundColor: "#f9f9f9" }}
                    checked
                  />
                  <label className="form-check-label text-body" htmlFor="colorTwo">
                    {" "}
                    White{" "}
                  </label>
                </div>
                <div className="form-check form-check-color mb-3">
                  <input
                    className="form-check-input"
                    id="colorThree"
                    type="checkbox"
                    style={{ backgroundColor: "#3b86ff" }}
                  />
                  <label className="form-check-label text-body" htmlFor="colorThree">
                    {" "}
                    Blue{" "}
                  </label>
                </div>
                <div className="form-check form-check-color mb-3">
                  <input
                    className="form-check-input"
                    id="colorFour"
                    type="checkbox"
                    style={{ backgroundColor: "#ff6f61" }}
                  />
                  <label className="form-check-label text-body" htmlFor="colorFour">
                    {" "}
                    Red{" "}
                  </label>
                </div>
                <div className="form-check form-check-color mb-3">
                  <input
                    className="form-check-input"
                    id="colorFive"
                    type="checkbox"
                    style={{ backgroundColor: "#795548" }}
                    disabled
                  />
                  <label className="form-check-label text-body" htmlFor="colorFive">
                    {" "}
                    Brown{" "}
                  </label>
                </div>
                <div className="form-check form-check-color mb-3">
                  <input
                    className="form-check-input"
                    id="colorSix"
                    type="checkbox"
                    style={{ backgroundColor: "#bababa" }}
                  />
                  <label className="form-check-label text-body" htmlFor="colorSix">
                    {" "}
                    Gray{" "}
                  </label>
                </div>
                <div className="form-check form-check-color mb-3">
                  <input
                    className="form-check-input"
                    id="colorSeven"
                    type="checkbox"
                    style={{ backgroundColor: "#17a2b8" }}
                  />
                  <label className="form-check-label text-body" htmlFor="colorSeven">
                    {" "}
                    Cyan{" "}
                  </label>
                </div>
                <div className="form-check form-check-color">
                  <input
                    className="form-check-input"
                    id="colorEight"
                    type="checkbox"
                    style={{ backgroundColor: "#e83e8c" }}
                  />
                  <label className="form-check-label text-body" htmlFor="colorEight">
                    {" "}
                    Pink{" "}
                  </label>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
              data-bs-toggle="collapse"
              href="#brandCollapse"
            >
              Brand
            </a>

            <div className="collapse" id="brandCollapse" data-simplebar-collapse="#brandGroup">
              <div data-list='{"valueNames": ["name"]}'>
                <div className="input-group input-group-merge mb-6">
                  <input
                    className="form-control form-control-xs search"
                    type="search"
                    placeholder="Search Brand"
                  />

                  <div className="input-group-append">
                    <button className="btn btn-outline-border btn-xs" title="search">
                      <i className="fe fe-search"></i>
                    </button>
                  </div>
                </div>

                <div className="form-group form-group-overflow mb-6" id="brandGroup">
                  <div className="list">
                    <div className="form-check mb-3">
                      <input className="form-check-input" id="brandOne" type="checkbox" />
                      <label className="form-check-label name" htmlFor="brandOne">
                        {" "}
                        Dsquared2{" "}
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" id="brandTwo" type="checkbox" disabled />
                      <label className="form-check-label name" htmlFor="brandTwo">
                        Alexander McQueen
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" id="brandThree" type="checkbox" />
                      <label className="form-check-label name" htmlFor="brandThree">
                        Balenciaga
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" id="brandFour" type="checkbox" checked />
                      <label className="form-check-label name" htmlFor="brandFour">
                        {" "}
                        Adidas{" "}
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" id="brandFive" type="checkbox" />
                      <label className="form-check-label name" htmlFor="brandFive">
                        {" "}
                        Balmain{" "}
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" id="brandSix" type="checkbox" />
                      <label className="form-check-label name" htmlFor="brandSix">
                        {" "}
                        Burberry{" "}
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" id="brandSeven" type="checkbox" />
                      <label className="form-check-label name" htmlFor="brandSeven">
                        {" "}
                        Chloé{" "}
                      </label>
                    </div>
                    <div className="form-check mb-3">
                      <input className="form-check-input" id="brandEight" type="checkbox" />
                      <label className="form-check-label name" htmlFor="brandEight">
                        {" "}
                        Kenzo{" "}
                      </label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" id="brandNine" type="checkbox" />
                      <label className="form-check-label name" htmlFor="brandNine">
                        {" "}
                        Givenchy{" "}
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </li>
          <li className="nav-item">
            <a
              className="nav-link dropdown-toggle fs-lg text-reset border-bottom mb-6"
              data-bs-toggle="collapse"
              href="#priceCollapse"
            >
              Price
            </a>

            <div className="collapse" id="priceCollapse" data-simplebar-collapse="#priceGroup">
              <div className="form-group form-group-overflow mb-6" id="priceGroup">
                <div className="form-check mb-3">
                  <input className="form-check-input" id="priceOne" type="checkbox" checked />
                  <label className="form-check-label" htmlFor="priceOne">
                    {" "}
                    $10.00 - $49.00{" "}
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" id="priceTwo" type="checkbox" checked />
                  <label className="form-check-label" htmlFor="priceTwo">
                    {" "}
                    $50.00 - $99.00{" "}
                  </label>
                </div>
                <div className="form-check mb-3">
                  <input className="form-check-input" id="priceThree" type="checkbox" />
                  <label className="form-check-label" htmlFor="priceThree">
                    {" "}
                    $100.00 - $199.00{" "}
                  </label>
                </div>
                <div className="form-check">
                  <input className="form-check-input" id="priceFour" type="checkbox" />
                  <label className="form-check-label" htmlFor="priceFour">
                    {" "}
                    $200.00 and Up{" "}
                  </label>
                </div>
              </div>

              <div className="d-flex align-items-center">
                <input
                  type="number"
                  className="form-control form-control-xs"
                  placeholder="$10.00"
                  min="10"
                />

                <div className="text-gray-350 mx-2">‒</div>

                <input
                  type="number"
                  className="form-control form-control-xs"
                  placeholder="$350.00"
                  max="350"
                />
              </div>
            </div>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Sidebar