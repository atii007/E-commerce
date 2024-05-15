import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import { ShopContext } from "../../Context/Context";

const Item = (props) => {
  const { addToCart } = useContext(ShopContext);

  return (
    <Box className="col-sm-6 col-md-4 col-lg-4">
      <Box className="box">
        <Box className="option_container">
          <Box className="options" sx={{ cursor: "pointer" }}>
            <Button
              className="option1"
              onClick={() => {
                addToCart(props.id);
              }}
            >
              Add To Cart
            </Button>
          </Box>
        </Box>
        <Box className="img-box">
          <img src={props.image} alt="" />
        </Box>
        <Box className="detail-box">
          <h5>{props.name}</h5>
          <h5>${props.new_price}</h5>
          <h6 style={{ textDecoration: "line-through" }}>${props.old_price}</h6>
        </Box>
      </Box>
    </Box>
  );
};

export default Item;
