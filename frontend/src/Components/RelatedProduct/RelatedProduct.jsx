import React from "react";
import "./RelatedProduct.css";
import data_product from "../Assets/data";
import Item from "../Item/Item";
import { Box } from "@mui/material";

const RelatedProduct = () => {
  return (
    <section className="product_section layout_padding">
      <Box className="container">
        <Box className="heading_container heading_center">
          <h2>
            New <span>Collection</span>
          </h2>
        </Box>
        <Box className="row">
          {data_product.map((item, i) => {
            return (
              <Item
                key={i}
                id={item.id}
                name={item.name}
                image={item.image}
                new_price={item.new_price}
                old_price={item.old_price}
              />
            );
          })}
        </Box>
      </Box>
    </section>
  );
};

export default RelatedProduct;
