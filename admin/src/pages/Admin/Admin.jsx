import React from "react";
import styles from "./Admin.module.css";
import Sidebar from "../../components/sidebar/Sidebar";
import { Routes, Route } from "react-router-dom";
import AddProduct from "../../components/addProduct/AddProduct";
import ListProduct from "../../components/listProduct/ListProduct";
import { Box } from "@mui/material";
import Dashboard from "../../components/dashboard/Dashboard";

const Admin = () => {
  return (
    <Box className={styles.admin}>
      <Sidebar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/addProduct" element={<AddProduct />} />
        <Route path="/listProduct" element={<ListProduct />} />
      </Routes>
    </Box>
  );
};

export default Admin;
