import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaMap } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-wrap">
        <section className="social-media">
          <div className="social-media-wrap">
            <Link to="/" className="social-title">
              <h2>Lost Boys Pizza</h2>
            </Link>
            <div className="social-icon">
              <a
                href="https://www.facebook.com/LostBoysPizza/"
                className="social-link"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaFacebook />
              </a>
            </div>

            <div className="social-icon">
              <a
                href="https://www.instagram.com/lostboyspizza/"
                className="social-link"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaInstagram />
              </a>
            </div>

            <div className="social-icon">
              <a
                href="https://www.google.com/maps/place/Lost+Boys+Pizza+Camden/@51.5336039,-0.1378751,15z/data=!4m5!3m4!1s0x0:0x9e9cf7ac30c9cc68!8m2!3d51.5336166!4d-0.1378454"
                className="social-link"
                target="_blank"
                rel="noreferrer noopener"
              >
                <FaMap />
              </a>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
