import React from "react";


const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="header__top__left">
              <ul>
                <li><i className="fa fa-envelope"></i> hello@colorlib.com</li>
                <li>Free Shipping for all Orders over $99</li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="header__top__right">
              <div className="header__top__right__social">
                <a href="#"><i className="fa fa-facebook"></i></a>
                <a href="#"><i className="fa fa-twitter"></i></a>
                <a href="#"><i className="fa fa-linkedin"></i></a>
                <a href="#"><i className="fa fa-pinterest-p"></i></a>
              </div>
              <div className="header__top__right__auth">
                <a href="#"><i className="fa fa-user"></i> Login</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
