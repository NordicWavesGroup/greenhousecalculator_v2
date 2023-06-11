import React from "react";
import './_landing-footer.scss';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const LandingFooter = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="about-section">
            <h3>About Us</h3>
            <p>
              Greenhouse Calculator, an initiative of Nordic Waves, is dedicated to providing accurate and efficient tools for measuring greenhouse gas emissions. Although our journey has just begun, we are committed to making a significant impact in the field.
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <a href="/about">About</a>
            <a href="/contact">Contact</a>
            <a href="/resources">Resources</a>
            <a href="/faq">FAQ</a>
            <a href="/careers">Careers</a>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="social-links">
            <a href="https://www.facebook.com"><FaFacebook /></a>
            <a href="https://www.twitter.com"><FaTwitter /></a>
            <a href="https://www.instagram.com"><FaInstagram /></a>
            <a href="https://www.linkedin.com"><FaLinkedin /></a>
          </div>
          <div className="footer-info">
            <p>&copy; {new Date().getFullYear()} Greenhouse Calculator. A Nordic Waves Organization. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default LandingFooter;
