import React from "react";
import styles from "./Sidebar.module.css";
import { Link } from "react-router-dom";
import addProductIcon from "../../assets/Product_Cart.svg";
import dashboard from "../../assets/dashboard.svg";
import listProductIcon from "../../assets/Product_list_icon.svg";
import { Box, Typography } from "@mui/material";

const Sidebar = () => {
  return (
    <Box className={styles.sidebar}>
      <Link to={"/"}>
        <Box className={styles.sidebarItem}>
          <img
            src={dashboard}
            alt=""
            style={{ width: "26px", height: "26px" }}
          />
          <Typography>Dashboard</Typography>
        </Box>
      </Link>
      <Link to={"/addProduct"}>
        <Box className={styles.sidebarItem}>
          <img src={addProductIcon} alt="" />
          <Typography>Add Products</Typography>
        </Box>
      </Link>
      <Link to={"/listProduct"}>
        <Box className={styles.sidebarItem}>
          <img src={listProductIcon} alt="" />
          <Typography>Products List</Typography>
        </Box>
      </Link>
    </Box>
  );
};

export default Sidebar;
