import React from "react";

import { Box, Typography } from "@mui/material";

const HeroCategories = ({ headingSpan, heading, description, image }) => {
  return (
    <Box className="hero_area">
      <section className="slider_section ">
        <Box className="slider_bg_box">
          <img src={image} alt="" />
        </Box>
        <Box
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <Box className="carousel-inner">
            <Box className="container">
              <Box className="row">
                <Box className="col-md-7 col-lg-6 ">
                  <Box className="detail-box">
                    <h1>
                      <span>{headingSpan}</span>
                      <br />
                      {heading}
                    </h1>
                    <Typography>{description}</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default HeroCategories;
