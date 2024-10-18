import styles from "./Navbar.module.css";
import cart_icon from "../Assets/cart_icon.png";
import { Link } from "react-router-dom";
import NavLinks from "./NavLinks";
import { Box, Typography } from "@mui/material";
import CustomButton from "../sharedComponent/CustomButton";
import LoginSignup from "../../Pages/LoginSignup";
import { useAuth } from "../../context/authProvider";
import { connect } from "react-redux";
import { openLoginModal } from "../../states-management/actions/actions";
import { useCookies } from "react-cookie";

export const Navbar = ({ open, cartItem, openLoginModal }) => {
  const { handleLogout } = useAuth();

  const [cookies] = useCookies(["token"]);

  const getTotalCartItems = () => {
    let totalItem = 0;
    for (const item in cartItem) {
      if (cartItem[item] > 0) {
        totalItem += cartItem[item];
      }
    }
    return totalItem;
  };

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
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span> </span>
          </button>
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
                {cookies.token ? (
                  <CustomButton
                    title="Log Out"
                    marginTop="0px"
                    width="90px"
                    height="30px"
                    borderRadius="4px"
                    onClick={handleLogout}
                  />
                ) : (
                  <Link
                    className="nav-link"
                    to=""
                    style={{ textDecorationLine: "none", color: "white" }}
                    onClick={() => openLoginModal(true)}
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

function mapStateToProps(state) {
  return {
    open: state.open,
    cartItem: state.cartItem,
  };
}

export default connect(mapStateToProps, { openLoginModal })(Navbar);
