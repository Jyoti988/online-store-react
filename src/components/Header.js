import React from "react";

const Header = () => {
  return (
    <header className="header py-2 bg-light">
      <div className="container">
        <div className="row align-items-center">
          {/* Left Section */}
          <div className="col-12 col-md-6 mb-2 mb-md-0">
            <div className="header_top_left text-center text-md-start">
              <ul className="list-inline mb-0">
                <li className="list-inline-item me-3">
                  <i className="fa fa-envelope"></i> hello@colorlib.com
                </li>
                <li className="list-inline-item">Free Shipping for all Orders over $99</li>
              </ul>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-6">
            <div className="header_top_right text-center text-md-end">
              <div className="header_topright_social d-inline me-3">
                <a href="#" className="text-decoration-none me-2">
                  <i className="fa fa-facebook"></i>
                </a>
                <a href="#" className="text-decoration-none me-2">
                  <i className="fa fa-twitter"></i>
                </a>
                <a href="#" className="text-decoration-none me-2">
                  <i className="fa fa-linkedin"></i>
                </a>
                <a href="#" className="text-decoration-none">
                  <i className="fa fa-pinterest-p"></i>
                </a>
              </div>
              <div className="header_topright_auth d-inline">
                <a href="#" className="text-decoration-none">
                  <i className="fa fa-user"></i> Login
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;