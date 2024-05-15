import React, { useState } from "react";
import styles from "./AddProduct.module.css";
import uploadArea from "../../assets/upload_area.svg";
import { toast } from "react-toastify";
import { Box } from "@mui/material";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    category: "women",
    new_price: "",
    old_price: "",
  });

  const changeHandler = (event) => {
    setProductDetails({
      ...productDetails,
      [event.target.name]: event.target.value,
    });
  };

  const imageHandler = (event) => {
    setImage(event.target.files[0]);
  };

  const addProduct = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4000/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log("Product", product);
      await fetch("http://localhost:4000/addproduct", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((res) => res.json())
        .then((data) => {
          data.success
            ? toast.success("Product Added")
            : toast.error("Failed to Add Product");
        });
    }
  };

  return (
    <Box className={styles.addProduct}>
      <Box class={`${styles.heading_container} ${styles.heading_center}`}>
        <h2>
          Add <span>Products</span>
        </h2>
      </Box>
      <Box className={styles.addProductFields}>
        <p>Product Title</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type Here"
        />
      </Box>
      <Box className={styles.addProductPrice}>
        <Box className={styles.addProductFields}>
          <p>Price</p>
          <input
            value={productDetails.old_price}
            onChange={changeHandler}
            type="text"
            name="old_price"
            id=""
            placeholder="Type Here"
          />
        </Box>
        <Box className={styles.addProductFields}>
          <p>Offer Price</p>
          <input
            value={productDetails.new_price}
            onChange={changeHandler}
            type="text"
            name="new_price"
            id=""
            placeholder="Type Here"
          />
        </Box>
      </Box>
      <Box className={styles.addProductFields}>
        <p>Product Category</p>
        <select
          value={productDetails.category}
          onChange={changeHandler}
          name="category"
          className={styles.addProductSelector}
        >
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kids</option>
        </select>
      </Box>
      <Box className={styles.addProductFields}>
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : uploadArea}
            alt=""
            className={styles.addProductThumbnail}
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </Box>
      <button className={styles.addProductButton} onClick={addProduct}>
        Add
      </button>
    </Box>
  );
};

export default AddProduct;
