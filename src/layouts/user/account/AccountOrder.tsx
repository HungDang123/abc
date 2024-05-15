import React from "react";
import ListGroup from "./components/ListGroup";
import OrderDetail from "./components/OrderDetails";


const AccountOrder: React.FC = () => {
  return (
    <div>
      <nav className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <ol className="breadcrumb mb-0 fs-xs text-gray-400">
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="index.html">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">My Account</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12 text-center">
              <h3 className="mb-10">My Account</h3>
            </div>
          </div>
          <div className="row">
            <ListGroup/>
            <OrderDetail />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountOrder;
