import React, { useContext } from "react";
import styles from "./Navbar.module.css";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import NavLinks from "./NavLinks";
import { ShopContext } from "../../Context/Context";
import { Box, Button, Typography } from "@mui/material";
import CustomButton from "../sharedComponent/CustomButton";
import LoginSignup from "../../Pages/LoginSignup";

const Navbar = () => {
  const { getTotalCartItems, handleOpen, open } = useContext(ShopContext);
  const navigate = useNavigate();

  return (
    <header className="header_section">
      <Box className="container">
        <nav className="navbar navbar-expand-lg custom_nav-container ">
          <Link
            to="/"
            className="navbar-brand"
            style={{
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <img width={50} src="images/logo.png" alt="#" />
            <Typography
              sx={{
                fontSize: "20px",
                fontWeight: "600",
                color: "black",
                marginLeft: "10px",
              }}
            >
              SHOPPER
            </Typography>
          </Link>
          <Button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className> </span>
          </Button>
          <Box className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav">
              <NavLinks />
              <li className="nav-item">
                <Link className="nav-link" to="/cart">
                  <img src={cart_icon} alt="" width={20} />
                </Link>
                <Box className={styles.navCartCount}>{getTotalCartItems()}</Box>
              </li>
              <li className="nav-item">
                {localStorage.getItem("auth-token") ? (
                  <CustomButton
                    title="Log Out"
                    marginTop="0px"
                    width="90px"
                    height="30px"
                    borderRadius="4px"
                    onClick={() => {
                      localStorage.removeItem("auth-token");
                      navigate("/");
                    }}
                  />
                ) : (
                  <Link
                    className="nav-link"
                    to=""
                    style={{ textDecorationLine: "none", color: "white" }}
                    onClick={handleOpen}
                  >
                    <CustomButton
                      title="Log In"
                      marginTop="0px"
                      width="80px"
                      height="30px"
                      borderRadius="4px"
                    />
                  </Link>
                )}
              </li>
            </ul>
          </Box>
        </nav>
      </Box>
      {open && <LoginSignup />}
    </header>
  );
};

export default Navbar;
