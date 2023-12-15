import React from 'react';
import "./footer.css";

import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer_social_links_container">
        <div className="footer_social_links">
          <p className="info">Be in touch with us</p>
          <p className="social_links">
            <FacebookOutlinedIcon />
            <InstagramIcon />
            <TwitterIcon />
            <GoogleIcon />
            <PinterestIcon />
          </p>
          <p className="email_container"> <input type="email" name="" id="" placeholder='Your Email' /><span>Join us</span></p>
        </div>
      </div>

      <div className="footer_links_container">
        <div className="link_section">
          <div className="link_items">
            <h1>Categories</h1>
            <span>Women</span>
            <span>Men</span>
            <span>Shoes</span>
            <span>Accessories</span>
            <span>New Arrivals</span>
          </div>
          <div className="link_items">
            <h1>Links</h1>
            <span>FAQ</span>
            <span>Pages</span>
            <span>Stores</span>
            <span>Compare</span>
            <span>Cookies</span>
          </div>
          <div className="link_items">
            <h1>Get in Touch</h1>
            <span>Facebook</span>
            <span>Twitter</span>
            <span>Instagram</span>
            <span>Email</span>
          </div>
          <div className="link_items">
            <h1>Know Us</h1>
            <span>About Us</span>
            <span>Careers</span>
            <span>Press Release</span>
            <span>Cookies</span>
          </div>
        </div>
        <div className="info_section">
          <div className="branding">
            <span className="logo_name">PrimeCart</span>
            <span className="copyright">© Copyright 2023. All Rights Reserved</span>
          </div>
          <div className="payment_img">
            <img src="./images/payment.png" alt="" />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer