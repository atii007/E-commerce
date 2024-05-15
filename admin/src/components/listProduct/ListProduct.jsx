import React, { useEffect, useState } from "react";
import styles from "./ListProduct.module.css";
import cross_icon from "../../assets/cross_icon.png";
import { Box } from "@mui/material";

const ListProduct = () => {
  const [allProducts, setAllProducts] = useState([]);

  const fetchProducts = async () => {
    await fetch("http://localhost:4000/allproducts")
      .then((res) => res.json())
      .then((data) => {
        setAllProducts(data);
      });
  };

  const removeProduct = async (id) => {
    await fetch("http://localhost:4000/removeproduct", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id: id }),
    });
    await fetchProducts();
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <Box className={styles.listProduct}>
      <Box class={`${styles.heading_container} ${styles.heading_center}`}>
        <h2>
          All <span>Products</span>
        </h2>
      </Box>
      <Box className={styles.productsFormatMain}>
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </Box>
      <Box
        sx={{
          width: "100%",
          overflowY: "auto",
          padding: "10px 20px",
          "&::-webkit-scrollbar": {
            width: "8px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#ff4141",
            borderRadius: "10px",
          },
        }}
      >
        <hr />
        {allProducts.map((product, i) => {
          return (
            <>
              <Box
                key={i}
                className={`${styles.productsFormatMain} ${styles.productsFormat}`}
              >
                <img
                  src={product.image}
                  alt=""
                  className={styles.productIcon}
                />
                <p>{product.name}</p>
                <p>${product.old_price}</p>
                <p>${product.new_price}</p>
                <p>{product.category}</p>
                <img
                  src={cross_icon}
                  alt=""
                  className={styles.productRemoveIcon}
                  onClick={() => {
                    removeProduct(product.id);
                  }}
                />
              </Box>
              <hr />
            </>
          );
        })}
      </Box>
    </Box>
  );
};

export default ListProduct;
