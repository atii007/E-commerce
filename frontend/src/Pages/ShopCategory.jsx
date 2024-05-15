import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import Item from "../Components/Item/Item";
import { Box, Typography } from "@mui/material";
import { ShopContext } from "../Context/Context";
import CustomButton from "../Components/sharedComponent/CustomButton";

const ShopCategory = (props) => {
  const { all_Product } = useContext(ShopContext);

  const categoryProducts = all_Product.filter(
    (product) => product.category === props.category
  );

  return (
    <Box className="shop-category">
      {props.banner}
      <Box class="heading_container heading_center">
        <h2 style={{ marginTop: "35px", textTransform: "uppercase" }}>
          {props.category}'s <span>Choice</span>
        </h2>
      </Box>
      <Box className="shopcategory-indexSort">
        <Typography>
          <span>Showing {categoryProducts.length}</span> out of{" "}
          {categoryProducts.length} products
        </Typography>
      </Box>
      <section className="product_section layout_padding">
        <Box className="container">
          <Box className="row">
            {all_Product.map((item, i) => {
              if (props.category === item.category) {
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
              } else {
                return null;
              }
            })}
          </Box>
        </Box>
      </section>
      <Box sx={{ textAlign: "center", margin: "70px 0px" }}>
        <CustomButton
          title="Explore More"
          marginTop="15px"
          width="233px"
          height="69px"
          borderRadius="50px"
        />
      </Box>
    </Box>
  );
};

export default ShopCategory;
