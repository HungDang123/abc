import React from "react";
const FormCheckout: React.FC = () => {
  return (
    <div className="col-12 col-md-7">
      <form>
        <h6 className="mb-7">Billing Details</h6>

        <div className="row mb-9">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label" htmlFor="checkoutBillingFirstName">
                First Name *
              </label>
              <input
                className="form-control form-control-sm"
                id="checkoutBillingFirstName"
                type="text"
                placeholder="First Name"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label" htmlFor="checkoutBillingLastName">
                Last Name *
              </label>
              <input
                className="form-control form-control-sm"
                id="checkoutBillingLastName"
                type="text"
                placeholder="Last Name"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="form-label" htmlFor="checkoutBillingEmail">
                Email *
              </label>
              <input
                className="form-control form-control-sm"
                id="checkoutBillingEmail"
                type="email"
                placeholder="Email"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="form-label" htmlFor="checkoutBillingCompany">
                Company name *
              </label>
              <input
                className="form-control form-control-sm"
                id="checkoutBillingCompany"
                type="text"
                placeholder="Company name (optional)"
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="form-label" htmlFor="checkoutBillingCountry">
                Country *
              </label>
              <input
                className="form-control form-control-sm"
                id="checkoutBillingCountry"
                type="text"
                placeholder="Country"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="form-label" htmlFor="checkoutBillingAddress">
                Address Line 1 *
              </label>
              <input
                className="form-control form-control-sm"
                id="checkoutBillingAddress"
                type="text"
                placeholder="Address Line 1"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <label className="form-label" htmlFor="checkoutBillingAddressTwo">
                Address Line 2
              </label>
              <input
                className="form-control form-control-sm"
                id="checkoutBillingAddressTwo"
                type="text"
                placeholder="Address Line 2 (optional)"
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label" htmlFor="checkoutBillingTown">
                Town / City *
              </label>
              <input
                className="form-control form-control-sm"
                id="checkoutBillingTown"
                type="text"
                placeholder="Town / City"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label className="form-label" htmlFor="checkoutBillingZIP">
                ZIP / Postcode *
              </label>
              <input
                className="form-control form-control-sm"
                id="checkoutBillingZIP"
                type="text"
                placeholder="ZIP / Postcode"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <div className="form-group mb-0">
              <label className="form-label" htmlFor="checkoutBillingPhone">
                Mobile Phone *
              </label>
              <input
                className="form-control form-control-sm"
                id="checkoutBillingPhone"
                type="tel"
                placeholder="Mobile Phone"
                required
              />
            </div>
          </div>
        </div>

        <h6 className="mb-7">Shipping Details</h6>

        <div className="table-responsive mb-6">
          <table className="table table-bordered table-sm table-hover mb-0">
            <tbody>
              <tr>
                <td>
                  <div className="form-check custom-radio">
                    <input
                      className="form-check-input"
                      id="checkoutShippingStandard"
                      name="shipping"
                      type="radio"
                    />
                    <label
                      className="form-check-label text-body text-nowrap"
                      htmlFor="checkoutShippingStandard"
                    >
                      Standard Shipping
                    </label>
                  </div>
                </td>
                <td>Delivery in 5 - 7 working days</td>
                <td>$8.00</td>
              </tr>
              <tr>
                <td>
                  <div className="form-check custom-radio">
                    <input
                      className="form-check-input"
                      id="checkoutShippingExpress"
                      name="shipping"
                      type="radio"
                    />
                    <label
                      className="form-check-label text-body text-nowrap"
                      htmlFor="checkoutShippingExpress"
                    >
                      Express Shipping
                    </label>
                  </div>
                </td>
                <td>Delivery in 3 - 5 working days</td>
                <td>$12.00</td>
              </tr>
              <tr>
                <td>
                  <div className="form-check custom-radio">
                    <input
                      className="form-check-input"
                      id="checkoutShippingShort"
                      name="shipping"
                      type="radio"
                    />
                    <label
                      className="form-check-label text-body text-nowrap"
                      htmlFor="checkoutShippingShort"
                    >
                      1 - 2 Shipping
                    </label>
                  </div>
                </td>
                <td>Delivery in 1 - 2 working days</td>
                <td>$18.00</td>
              </tr>
              <tr>
                <td>
                  <div className="form-check custom-radio">
                    <input
                      className="form-check-input"
                      id="checkoutShippingFree"
                      name="shipping"
                      type="radio"
                    />
                    <label
                      className="form-check-label text-body text-nowrap"
                      htmlFor="checkoutShippingFree"
                    >
                      Free Shipping
                    </label>
                  </div>
                </td>
                <td>
                  Living won't the He one every subdue meat replenish face was you morning firmament
                  darkness.
                </td>
                <td>$0.00</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mb-9">
          <div className="form-check">
            <input className="form-check-input" id="checkoutShippingAddress" type="checkbox" />
            <label
              className="form-check-label fs-sm"
              data-bs-toggle="collapse"
              data-bs-target="#checkoutShippingAddressCollapse"
              htmlFor="checkoutShippingAddress"
            >
              Ship to a different address?
            </label>
          </div>

          <div className="collapse" id="checkoutShippingAddressCollapse">
            <div className="row mt-6">
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="checkoutShippingAddressCountry">
                    Country *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="checkoutShippingAddressCountry"
                    type="text"
                    placeholder="Country"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="checkoutShippingAddressLineOne">
                    Address Line 1 *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="checkoutShippingAddressLineOne"
                    type="text"
                    placeholder="Address Line 1"
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <label className="form-label" htmlFor="checkoutShippingAddressLineTwo">
                    Address Line 2
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="checkoutShippingAddressLineTwo"
                    type="text"
                    placeholder="Address Line 2 (optional)"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="checkoutShippingAddressTown">
                    Town / City *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="checkoutShippingAddressTown"
                    type="text"
                    placeholder="Town / City"
                  />
                </div>
              </div>
              <div className="col-6">
                <div className="form-group">
                  <label className="form-label" htmlFor="checkoutShippingAddressZIP">
                    ZIP / Postcode *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="checkoutShippingAddressZIP"
                    type="text"
                    placeholder="ZIP / Postcode"
                  />
                </div>
              </div>
              <div className="col-12">
                <button className="btn btn-sm btn-outline-dark" type="submit">
                  Save Address
                </button>
              </div>
            </div>
          </div>
        </div>

        <h6 className="mb-7">Payment</h6>

        <div className="list-group list-group-sm mb-7">
          <div className="list-group-item">
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                id="checkoutPaymentCard"
                name="payment"
                type="radio"
                data-collapse="show"
                data-target="#checkoutPaymentCardCollapse"
              />

              <label
                className="form-check-label fs-sm text-body text-nowrap"
                htmlFor="checkoutPaymentCard"
              >
                Credit Card
                <img className="ms-2" src="assets/img/brands/color/cards.svg" alt="..." />
              </label>
            </div>
          </div>
          <div className="list-group-item collapse py-0" id="checkoutPaymentCardCollapse">
            <div className="row gx-5 py-5">
              <div className="col-12">
                <div className="form-group mb-4">
                  <label className="visually-hidden" htmlFor="checkoutPaymentCardNumber">
                    Card Number
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="checkoutPaymentCardNumber"
                    type="text"
                    placeholder="Card Number *"
                    required
                  />
                </div>
              </div>
              <div className="col-12">
                <div className="form-group mb-4">
                  <label className="visually-hidden" htmlFor="checkoutPaymentCardName">
                    Name on Card
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="checkoutPaymentCardName"
                    type="text"
                    placeholder="Name on Card *"
                    required
                  />
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group mb-md-0">
                  <label className="visually-hidden" htmlFor="checkoutPaymentMonth">
                    Month
                  </label>
                  <select className="form-select form-select-sm" id="checkoutPaymentMonth">
                    <option>January</option>
                    <option>February</option>
                    <option>March</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="form-group mb-md-0">
                  <label className="visually-hidden" htmlFor="checkoutPaymentCardYear">
                    Year
                  </label>
                  <select className="form-select form-select-sm" id="checkoutPaymentCardYear">
                    <option>2017</option>
                    <option>2018</option>
                    <option>2019</option>
                  </select>
                </div>
              </div>
              <div className="col-12 col-md-4">
                <div className="input-group input-group-merge">
                  <input
                    className="form-control form-control-sm"
                    id="checkoutPaymentCardCVV"
                    type="text"
                    placeholder="CVV *"
                    required
                  />
                  <div className="input-group-append">
                    <span
                      className="input-group-text"
                      data-bs-toggle="popover"
                      data-bs-placement="top"
                      data-bs-trigger="hover"
                      data-bs-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards."
                    >
                      <span>
                        <i className="fe fe-help-circle"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="list-group-item">
            <div className="form-check custom-radio">
              <input
                className="form-check-input"
                id="checkoutPaymentPaypal"
                name="payment"
                type="radio"
                data-collapse="hide"
                data-target="#checkoutPaymentCardCollapse"
              />

              <label
                className="form-check-label fs-sm text-body text-nowrap"
                htmlFor="checkoutPaymentPaypal"
              >
                <img src="assets/img/brands/color/paypal.svg" alt="..." />
              </label>
            </div>
          </div>
        </div>

        <textarea
          className="form-control form-control-sm mb-9 mb-md-0 fs-xs"
          rows={5}
          placeholder="Order Notes (optional)"
        ></textarea>
      </form>
    </div>
  );
};
export default FormCheckout;
