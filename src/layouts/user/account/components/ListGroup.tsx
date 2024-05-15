import React from "react";

const ListGroup: React.FC = ()=>{
    return(
        <div className="col-12 col-md-3">
            <nav className="mb-10 mb-md-0">
              <div className="list-group list-group-sm list-group-strong list-group-flush-x">
                <a className="list-group-item list-group-item-action dropend-toggle active" href="account-orders">
                  Orders
                </a>
                <a className="list-group-item list-group-item-action dropend-toggle" href="account-wishlist">
                  Wishlist
                </a>
                <a className="list-group-item list-group-item-action dropend-toggle" href="account-personal-info">
                  Personal Info
                </a>
                <a className="list-group-item list-group-item-action dropend-toggle" href="account-address">
                  Addresses
                </a>
                <a className="list-group-item list-group-item-action dropend-toggle" href="account-payment">
                  Payment Methods
                </a>
                <a className="list-group-item list-group-item-action dropend-toggle" href="#!">
                  Logout
                </a>
              </div>
            </nav>
          </div>
    )
}
export default ListGroup;