import React from 'react';
const Footer = () => {
  return (
    <footer id="footer">
      {/* Top Footer */}
      <div className="section">
        <div className="container">
          <div className="row">
            {/* About Us */}
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                </p>
                <ul className="footer-links">
                  <li>
                    <a href="#" className="footer-link">
                      <i className="fa fa-map-marker"></i>1734 Stonecoal Road
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      <i className="fa fa-phone"></i>+021-95-51-84
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link">
                      <i className="fa fa-envelope-o"></i>email@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Categories */}
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Categories</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">Hot deals</a></li>
                  <li><a href="#" className="footer-link">Laptops</a></li>
                  <li><a href="#" className="footer-link">Smartphones</a></li>
                  <li><a href="#" className="footer-link">Cameras</a></li>
                  <li><a href="#" className="footer-link">Accessories</a></li>
                </ul>
              </div>
            </div>

            {/* Information */}
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Information</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">About Us</a></li>
                  <li><a href="#" className="footer-link">Contact Us</a></li>
                  <li><a href="#" className="footer-link">Privacy Policy</a></li>
                  <li><a href="#" className="footer-link">Orders and Returns</a></li>
                  <li><a href="#" className="footer-link">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>

            {/* Service */}
            <div className="col-md-3 col-xs-6">
              <div className="footer">
                <h3 className="footer-title">Service</h3>
                <ul className="footer-links">
                  <li><a href="#" className="footer-link">My Account</a></li>
                  <li><a href="#" className="footer-link">View Cart</a></li>
                  <li><a href="#" className="footer-link">Wishlist</a></li>
                  <li><a href="#" className="footer-link">Track My Order</a></li>
                  <li><a href="#" className="footer-link">Help</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      
    </footer>
  );
};

export default Footer;
