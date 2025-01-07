import React, { useState } from 'react';
import Base from '../components/Base';
import axios from 'axios';
import { Toast, ToastContainer } from 'react-bootstrap';

const Index = () => {




  return (
    <>
      
      <div className="section">
        <div className="container">
          <div className="row">
            {/* Laptop Collection */}
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="/assets/img/shop01.png" alt="" />
                </div>
                <div className="shop-body">
                  <h3>Laptop<br />Collection</h3>
                  <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                </div>
              </div>
            </div>

            {/* Accessories Collection */}
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="./img/shop03.png" alt="" />
                </div>
                <div className="shop-body">
                  <h3>Accessories<br />Collection</h3>
                  <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                </div>
              </div>
            </div>

            {/* Camera Collection */}
            <div className="col-md-4 col-xs-6">
              <div className="shop">
                <div className="shop-img">
                  <img src="./img/shop02.png" alt="" />
                </div>
                <div className="shop-body">
                  <h3>Cameras<br />Collection</h3>
                  <a href="#" className="cta-btn">Shop now <i className="fa fa-arrow-circle-right"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>








    </>
  );
};

export default Index;
