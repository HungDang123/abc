import React from "react";

const Description : React.FC = () =>{
    return(
        <section className="pt-11">
      <div className="container">
        <div className="row">
          <div className="col-12">
           
            <div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
              <a className="nav-link" data-bs-toggle="tab" href="#descriptionTab">
                Description
              </a>
              <a className="nav-link" data-bs-toggle="tab" href="#sizeTab">
                Size &amp; Fit
              </a>
              <a className="nav-link active" data-bs-toggle="tab" href="#shippingTab">
                Shipping &amp; Return
              </a>
            </div>

         
            <div className="tab-content">
              <div className="tab-pane fade" id="descriptionTab">
                <div className="row justify-content-center py-9">
                  <div className="col-12 col-lg-10 col-xl-8">
                    <div className="row">
                      <div className="col-12">
                        <p className="text-gray-500">
                          Won't herb first male seas, beast. Let upon, female
                          upon third fifth every. Man subdue rule after years
                          herb after form. And image may, morning. Behold in
                          tree day sea that together cattle whose. Fifth
                          gathering brought bearing. Abundantly creeping whose.
                          Beginning form have void two. A whose.
                        </p>
                      </div>
                      <div className="col-12 col-md-6">
                        <ul className="list list-unstyled mb-md-0 text-gray-500">
                          <li>
                            <strong className="text-body">SKU</strong>: #61590437
                          </li>
                          <li>
                            <strong className="text-body">Occasion</strong>:
                            Lifestyle, Sport
                          </li>
                          <li>
                            <strong className="text-body">Country</strong>: Italy
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-6">
                        <ul className="list list-unstyled mb-0">
                          <li>
                            <strong>Outer</strong>: Leather 100%, Polyamide 100%
                          </li>
                          <li><strong>Lining</strong>: Polyester 100%</li>
                          <li><strong>CounSoletry</strong>: Rubber 100%</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="sizeTab">
                <div className="row justify-content-center py-9">
                  <div className="col-12 col-lg-10 col-xl-8">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        <p className="mb-4">
                          <strong>Fitting information:</strong>
                        </p>

                        <ul className="mb-md-0 text-gray-500">
                          <li>
                            Upon seas hath every years have whose subdue
                            creeping they're it were.
                          </li>
                          <li>Make great day bearing.</li>
                          <li>For the moveth is days don't said days.</li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-6">
                        <p className="mb-4">
                          <strong>Model measurements:</strong>
                        </p>

                        <ul className="list-unstyled text-gray-500">
                          <li>Height: 1.80 m</li>
                          <li>Bust/Chest: 89 cm</li>
                          <li>Hips: 91 cm</li>
                          <li>Waist: 65 cm</li>
                          <li>Model size: M</li>
                        </ul>

                        <p className="mb-0">
                          <img src="assets/img/icons/icon-ruler.svg" alt="..." className="img-fluid"/>
                          <a className="text-reset text-decoration-underline ms-3" data-bs-toggle="modal" href="#modalSizeChart">Size chart</a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade active show" id="shippingTab">
                <div className="row justify-content-center py-9">
                  <div className="col-12 col-lg-10 col-xl-8">
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm table-hover">
                        <thead>
                          <tr>
                            <th>Shipping Options</th>
                            <th>Delivery Time</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Standard Shipping</td>
                            <td>Delivery in 5 - 7 working days</td>
                            <td>$8.00</td>
                          </tr>
                          <tr>
                            <td>Express Shipping</td>
                            <td>Delivery in 3 - 5 working days</td>
                            <td>$12.00</td>
                          </tr>
                          <tr>
                            <td>1 - 2 day Shipping</td>
                            <td>Delivery in 1 - 2 working days</td>
                            <td>$12.00</td>
                          </tr>
                          <tr>
                            <td>Free Shipping</td>
                            <td>
                              Living won't the He one every subdue meat
                              replenish face was you morning firmament darkness.
                            </td>
                            <td>$0.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <p className="mb-0 text-gray-500">
                      May, life blessed night so creature likeness their, for.
                      <a className="text-body text-decoration-underline" href="#!">Find out more</a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
}
export default Description