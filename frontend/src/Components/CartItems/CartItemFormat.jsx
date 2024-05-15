import React from "react";
import style from "./CartItems.module.css";
import { Box } from "@mui/material";

const format = [
  { title: "Product" },
  { title: "Title" },
  { title: "Price" },
  { title: "Quantity" },
  { title: "Total" },
  { title: "Remove" },
];

const CartItemFormat = () => {
  return (
    <Box className={style.cartitemFormatMain}>
      {format.map((form) => {
        return <p key={form.title}>{form.title}</p>;
      })}
    </Box>
  );
};

export default CartItemFormat;
