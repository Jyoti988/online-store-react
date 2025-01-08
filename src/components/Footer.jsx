import React from "react";

const Footer = () => {
  return (
    <footer id="footer" className="bg-dark text-light py-4">
      {/* Top Footer */}
      <div className="section">
        <div className="container">
          <div className="row">
            {/* About Us */}
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="footer">
                <h3 className="footer-title">About Us</h3>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut.
                </p>
                <ul className="footer-links list-unstyled">
                  <li>
                    <a href="#" className="footer-link text-decoration-none text-light">
                      <i className="fa fa-map-marker me-2"></i>1734 Stonecoal Road
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link text-decoration-none text-light">
                      <i className="fa fa-phone me-2"></i>+021-95-51-84
                    </a>
                  </li>
                  <li>
                    <a href="#" className="footer-link text-decoration-none text-light">
                      <i className="fa fa-envelope me-2"></i>email@email.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Categories */}
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="footer">
                <h3 className="footer-title">Categories</h3>
                <ul className="footer-links list-unstyled">
                  <li><a href="#" className="footer-link text-decoration-none text-light">Hot deals</a></li>
                  <li><a href="#" className="footer-link text-decoration-none text-light">Laptops</a></li>
                  <li><a href="#" className="footer-link text-decoration-none text-light">Smartphones</a></li>
                  <li><a href="#" className="footer-link text-decoration-none text-light">Cameras</a></li>
                  <li><a href="#" className="footer-link text-decoration-none text-light">Accessories</a></li>
                </ul>
              </div>
            </div>

            {/* Information */}
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="footer">
                <h3 className="footer-title">Information</h3>
                <ul className="footer-links list-unstyled">
                  <li><a href="#" className="footer-link text-decoration-none text-light">About Us</a></li>
                  <li><a href="#" className="footer-link text-decoration-none text-light">Contact Us</a></li>
                  <li><a href="#" className="footer-link text-decoration-none text-light">Privacy Policy</a></li>
                  <li><a href="#" className="footer-link text-decoration-none text-light">Orders and Returns</a></li>
                  <li><a href="#" className="footer-link text-decoration-none text-light">Terms & Conditions</a></li>
                </ul>
              </div>
            </div>

            {/* Service */}
            <div className="col-md-3 col-sm-6 mb-4">
              <div className="footer">
                <h3 className="footer-title">Service</h3>
                <ul className="footer-links list-unstyled">
                  <li><a href="#" className="footer-link text-decoration-none text-light">My Account</a></li>
                  <li><a href="#" className="footer-link text-decoration-none text-light">View Cart</a></li>
                  <li><a href="#" className="footer-link text-decoration-none text-light">Wishlist</a></li>
                  <li><a href="#" className="footer-link text-decoration-none text-light">Track My Order</a></li>
                  <li><a href="#" className="footer-link text-decoration-none text-light">Help</a></li>
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