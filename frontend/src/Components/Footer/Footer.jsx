import React from "react";
import styles from "./Footer.module.css";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer_section">
      <Box className="container">
        <Box className="row">
          <Box className="col-md-4 footer-col">
            <Box className="footer_contact">
              <h4>Reach at..</h4>
              <Box className="contact_link_box">
                <Link to="">
                  <i className="fa fa-map-marker" aria-hidden="true" />
                  <span>Location</span>
                </Link>
                <Link to="">
                  <i className="fa fa-phone" aria-hidden="true" />
                  <span>Call +01 1234567890</span>
                </Link>
                <Link to="">
                  <i className="fa fa-envelope" aria-hidden="true" />
                  <span>demo@gmail.com</span>
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="col-md-4 footer-col">
            <Box className="footer_detail">
              <Link to="/" className="footer-logo">
                Shopper
              </Link>
              <p>
                Necessary, making this the first true generator on the Internet.
                It uses a dictionary of over 200 Latin words, combined with
              </p>
              <Box className="footer_social">
                <Link to="">
                  <i className="fa fa-facebook" aria-hidden="true" />
                </Link>
                <Link to="">
                  <i className="fa fa-twitter" aria-hidden="true" />
                </Link>
                <Link to="">
                  <i className="fa fa-linkedin" aria-hidden="true" />
                </Link>
                <Link to="">
                  <i className="fa fa-instagram" aria-hidden="true" />
                </Link>
                <Link to="">
                  <i className="fa fa-pinterest" aria-hidden="true" />
                </Link>
              </Box>
            </Box>
          </Box>
          <Box className="col-md-4 footer-col">
            <Box className="map_container">
              <Box className="map">
                <Box id="googleMap" />
              </Box>
            </Box>
          </Box>
        </Box>
        <Box className="footer-info">
          <Box className={styles.footerCopyright}>
            <p>Copyright © 2024 - All Rights Reserved</p>
          </Box>
        </Box>
      </Box>
    </footer>
  );
};

export default Footer;
