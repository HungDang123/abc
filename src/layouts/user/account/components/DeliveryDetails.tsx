import React from "react";

const DeliveryAddress: React.FC = () => {
  return (
    <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="card card-lg bg-light mb-8">
            <div className="card-body">
              <h6 className="mb-6">Shipping Address</h6>

              <p className="text-muted mb-0">
                Ngô Bá Khá <br />
                Từ Sơn City <br />
                Bắc Ninh <br />
                Việt Nam <br />
                27111993
              </p>

              <div className="card-action card-action-end">
                <a
                  className="btn btn-xs btn-circle btn-white-primary"
                  href="account-address-edit"
                >
                  <i className="fe fe-edit-2"></i>
                </a>

                <button className="btn btn-xs btn-circle btn-white-primary" title="close">
                  <i className="fe fe-x"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="card card-lg bg-light mb-8">
            <div className="card-body">
              <h6 className="mb-6">Billing Address</h6>

              <p className="text-muted mb-0">
                Ngô Bá Khá <br />
                Trại giam Hoàng Tiến <br />
                Bộ Công an <br />
                Bắc Ninh, Việt Nam <br />
                27111993
              </p>

              <div className="card-action card-action-end">
                <a
                  className="btn btn-xs btn-circle btn-white-primary"
                  href="account-address-edit"
                >
                  <i className="fe fe-edit-2"></i>
                </a>

                <button className="btn btn-xs btn-circle btn-white-primary" title="close">
                  <i className="fe fe-x"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12">
          <a
            className="btn w-100 btn-lg btn-outline-border"
            href="account-address-edit"
          >
            Add Address <i className="fe fe-plus"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
export default DeliveryAddress;
