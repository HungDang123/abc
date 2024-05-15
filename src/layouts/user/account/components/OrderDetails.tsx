import { url } from "inspector";
import React from "react";
const OrderDetail:React.FC = ()=>{
    return (
        <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <div className="card card-lg mb-5 border">
              <div className="card-body pb-0">
                <div className="card card-sm">
                  <div className="card-body bg-light">
                    <div className="row">
                      <div className="col-6 col-lg-3">
                        <h6 className="heading-xxxs text-muted">Order No:</h6>

                        <p className="mb-lg-0 fs-sm fw-bold">673290789</p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <h6 className="heading-xxxs text-muted">Shipped date:</h6>

                        <p className="mb-lg-0 fs-sm fw-bold">
                          <time dateTime="2019-10-01"> 01 Oct, 2019 </time>
                        </p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <h6 className="heading-xxxs text-muted">Status:</h6>

                        <p className="mb-0 fs-sm fw-bold">Awating Delivery</p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <h6 className="heading-xxxs text-muted">Order Amount:</h6>

                        <p className="mb-0 fs-sm fw-bold">$259.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                    <div className="row gx-5 mb-4 mb-lg-0">
                      <div className="col-3">
                        <div className="ratio ratio-1x1 bg-cover" 
                        style={{backgroundImage: `url('assets/img/products/sofa1_1.jpg')`}}>
                        </div>
                        </div>
                      <div className="col-3">
                        <div className="ratio ratio-1x1 bg-cover" 
                        style={{backgroundImage: `url('assets/img/products/mattress1_2.jpg')`}}>
                        </div>
                        </div>
                      <div className="col-3">
                        <div className="ratio ratio-1x1 bg-cover" 
                        style={{backgroundImage: `url('assets/img/products/table1_2.jpg')`}}>
                        </div>
                        </div>
                      <div className="col-3">
                        <div className="ratio ratio-1x1 bg-light">
                          <a className="ratio-item ratio-item-text text-reset" href="#!">
                            <div className="fs-xxs fw-bold">
                              +2 <br/>
                              more
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="row gx-5">
                      <div className="col-6">
                        <a className="btn btn-sm w-100 btn-outline-dark" href="account-order.html">
                          Order Details
                        </a>
                      </div>
                      <div className="col-6">
                        <a className="btn btn-sm w-100 btn-outline-dark" href="#!">
                          Track order
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-lg mb-5 border">
              <div className="card-body pb-0">
                <div className="card card-sm">
                  <div className="card-body bg-light">
                    <div className="row">
                      <div className="col-6 col-lg-3">
                        <h6 className="heading-xxxs text-muted">Order No:</h6>

                        <p className="mb-lg-0 fs-sm fw-bold">673290789</p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <h6 className="heading-xxxs text-muted">Shipped date:</h6>

                        <p className="mb-lg-0 fs-sm fw-bold">
                          <time dateTime="2019-10-01"> 01 Oct, 2019 </time>
                        </p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <h6 className="heading-xxxs text-muted">Status:</h6>

                        <p className="mb-0 fs-sm fw-bold">Awating Delivery</p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <h6 className="heading-xxxs text-muted">Order Amount:</h6>

                        <p className="mb-0 fs-sm fw-bold">$259.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                    <div className="row gx-5 mb-4 mb-lg-0">
                      <div className="col-3">
                        <div className="ratio ratio-1x1 bg-cover" 
                        style={{backgroundImage: `url('assets/img/products/sofa1_1.jpg')`}}>
                        </div>
                        </div>
                      <div className="col-3">
                        <div className="ratio ratio-1x1 bg-cover" 
                        style={{backgroundImage: `url('assets/img/products/mattress1_2.jpg')`}}>
                        </div>
                        </div>
                      <div className="col-3">
                        <div className="ratio ratio-1x1 bg-cover" 
                        style={{backgroundImage: `url('assets/img/products/table1_2.jpg')`}}>
                        </div>
                        </div>
                      <div className="col-3">
                        <div className="ratio ratio-1x1 bg-light">
                          <a className="ratio-item ratio-item-text text-reset" href="#!">
                            <div className="fs-xxs fw-bold">
                              +2 <br/>
                              more
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="row gx-5">
                      <div className="col-6">
                        <a className="btn btn-sm w-100 btn-outline-dark" href="account-order.html">
                          Order Details
                        </a>
                      </div>
                      <div className="col-6">
                        <a className="btn btn-sm w-100 btn-outline-dark" href="#!">
                          Track order
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card card-lg mb-5 border">
              <div className="card-body pb-0">
                <div className="card card-sm">
                  <div className="card-body bg-light">
                    <div className="row">
                      <div className="col-6 col-lg-3">
                        <h6 className="heading-xxxs text-muted">Order No:</h6>

                        <p className="mb-lg-0 fs-sm fw-bold">673290789</p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <h6 className="heading-xxxs text-muted">Shipped date:</h6>

                        <p className="mb-lg-0 fs-sm fw-bold">
                          <time dateTime="2019-10-01"> 01 Oct, 2019 </time>
                        </p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <h6 className="heading-xxxs text-muted">Status:</h6>

                        <p className="mb-0 fs-sm fw-bold">Awating Delivery</p>
                      </div>
                      <div className="col-6 col-lg-3">
                        <h6 className="heading-xxxs text-muted">Order Amount:</h6>

                        <p className="mb-0 fs-sm fw-bold">$259.00</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card-footer">
                <div className="row align-items-center">
                  <div className="col-12 col-lg-6">
                    <div className="row gx-5 mb-4 mb-lg-0">
                      <div className="col-3">
                        <div className="ratio ratio-1x1 bg-cover" 
                        style={{backgroundImage: `url('assets/img/products/sofa1_1.jpg')`}}>
                        </div>
                        </div>
                      <div className="col-3">
                        <div className="ratio ratio-1x1 bg-cover" 
                        style={{backgroundImage: `url('assets/img/products/mattress1_2.jpg')`}}>
                        </div>
                        </div>
                      <div className="col-3">
                        <div className="ratio ratio-1x1 bg-cover" 
                        style={{backgroundImage: `url('assets/img/products/table1_2.jpg')`}}>
                        </div>
                        </div>
                      <div className="col-3">
                        <div className="ratio ratio-1x1 bg-light">
                          <a className="ratio-item ratio-item-text text-reset" href="#!">
                            <div className="fs-xxs fw-bold">
                              +2 <br/>
                              more
                            </div>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-12 col-lg-6">
                    <div className="row gx-5">
                      <div className="col-6">
                        <a className="btn btn-sm w-100 btn-outline-dark" href="account-order.html">
                          Order Details
                        </a>
                      </div>
                      <div className="col-6">
                        <a className="btn btn-sm w-100 btn-outline-dark" href="#!">
                          Track order
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <nav className="d-flex justify-content-center justify-content-md-end mt-10">
              <ul className="pagination pagination-sm text-gray-400">
                <li className="page-item">
                  <a className="page-link page-link-arrow" href="#">
                    <svg className="svg-inline--fa fa-caret-left" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M137.4 406.6l-128-127.1C3.125 272.4 0 264.2 0 255.1s3.125-16.38 9.375-22.63l128-127.1c9.156-9.156 22.91-11.9 34.88-6.943S192 115.1 192 128v255.1c0 12.94-7.781 24.62-19.75 29.58S146.5 415.8 137.4 406.6z"></path></svg>
                    {/* <!-- <i className="fa fa-caret-left"></i> Font Awesome fontawesome.com --> */}
                  </a>
                </li>
                <li className="page-item active">
                  <a className="page-link" href="#">1</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">2</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">3</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">4</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">5</a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">6</a>
                </li>
                <li className="page-item">
                  <a className="page-link page-link-arrow" href="#">
                    <svg className="svg-inline--fa fa-caret-right" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" data-fa-i2svg=""><path fill="currentColor" d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z"></path></svg>
                    {/* <!-- <i className="fa fa-caret-right"></i> Font Awesome fontawesome.com --> */}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
    )
}
export default OrderDetail;