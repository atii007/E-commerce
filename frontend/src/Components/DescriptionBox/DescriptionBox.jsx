import React from "react";
import "./DescriptionBox.css";
import { Box } from "@mui/material";

const DescriptionBox = () => {
  return (
    <Box className="descriptionbox">
      <Box className="box-navigator">
        <Box className="box-nav">Description</Box>
        <Box className="box-nav fade">Reviews (122)</Box>
      </Box>
      <Box className="box-description">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
          placeat sunt odit exercitationem provident delectus, consectetur rem
          facilis molestiae commodi blanditiis recusandae aliquid cumque sequi!
          Nihil ea minus architecto sunt eveniet, totam, perferendis quam, nulla
          officiis provident quae doloribus harum.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
          odio? Deleniti sunt excepturi autem rem. Quam asperiores beatae
          accusamus sint reiciendis optio ex veniam aut architecto praesentium,
          rem totam omnis?
        </p>
      </Box>
    </Box>
  );
};

export default DescriptionBox;
