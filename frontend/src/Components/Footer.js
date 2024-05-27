import React from 'react';
import { Link } from 'react-router-dom';
import email from '../Images/email.png';
import pin from '../Images/pin.png';
import facebook from '../Images/facebook.png';
import whatsapp from '../Images/whatsapp.png';
import twitter from '../Images/twitter.png';
import insta from '../Images/insta.png';

function Footer() {
  return (
    <footer className="" id="footer" style={{backgroundColor:'#0c0c0c', color:'white'}}>
      <div className="container p-4 pb-0">
        <div className="row">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Company name
            </h6>
            <p>
              Here you can use rows and columns to organize your footer
              content. Lorem ipsum dolor sit amet, consectetur adipisicing
              elit.
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
            <p>
              <a href="#" className="text-white">MDBootstrap</a>
            </p>
            <p>
              <a href="#" className="text-white">MDWordPress</a>
            </p>
            <p>
              <a href="#" className="text-white">BrandFlow</a>
            </p>
            <p>
              <a href="#" className="text-white">Bootstrap Angular</a>
            </p>
          </div>
          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
          <hr className="w-100 clearfix d-md-none" />
            <h6 className="text-uppercase mb-4 font-weight-bold">
              Useful links
            </h6>
            <p>
              <a href="#" className="text-white">Your Account</a>
            </p>
            <p>
              <a href="#" className="text-white">Become an Affiliate</a>
            </p>
            <p>
              <a href="#" className="text-white">Shipping Rates</a>
            </p>
            <p>
              <a href="#" className="text-white">Help</a>
            </p>
          </div>
          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
          <hr className="w-100 clearfix d-md-none" />
            <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
            <p><img src={pin} alt="location" className="mr-3" /> New York, NY 10012, US</p>
            <p><img src={email} alt="email" className="mr-3" /> info@gmail.com</p>
            <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
            <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
          </div>
        </div>
        <hr className="my-3" />
        <section className="p-3 pt-0">
          <div className="row d-flex align-items-center">
            <div className="col-md-7 col-lg-8 text-center text-md-start">
              <div className="p-3">
                © 2020 Copyright:
                <a href="https://mdbootstrap.com/" className="text-white">MDBootstrap.com</a>
              </div>
            </div>
            <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
              <a href="#" className="btn btn-floating m-1"><img src={facebook} alt="facebook" style={{textDecoration:'none'}}/></a>
              <a href="#" className="btn btn-floating m-1"><img src={twitter} alt="twitter" /></a>
              <a href="#" className="btn btn-floating m-1"><img src={whatsapp} alt="whatsapp" /></a>
              <a href="#" className="btn btn-floating m-1"><img src={insta} alt="instagram" /></a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}

export default Footer;