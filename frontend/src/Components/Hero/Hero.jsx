import React from "react";

import { Box, Typography } from "@mui/material";
import CustomButton from "../sharedComponent/CustomButton";

const Hero = () => {
  return (
    <Box className="hero_area">
      <section className="slider_section ">
        <Box className="slider_bg_box">
          <img src="images/slider-bg.jpg" alt="" />
        </Box>
        <Box
          id="customCarousel1"
          className="carousel slide"
          data-ride="carousel"
        >
          <Box className="carousel-inner">
            <Box className="carousel-item active">
              <Box className="container ">
                <Box className="row">
                  <Box className="col-md-7 col-lg-6 ">
                    <Box className="detail-box">
                      <h1>
                        <span>Explore Trends</span>
                        <br />
                        Fashion for Men
                      </h1>
                      <Typography>
                        Discover a curated collection of stylish clothing and
                        accessories designed for the modern man. From casual
                        essentials to sharp formal wear, find everything you
                        need to elevate your wardrobe.
                      </Typography>
                      <Box className="btn-box">
                        <CustomButton
                          title="Shop Now"
                          marginTop="15px"
                          width="190px"
                          height="50px"
                          borderRadius="4px"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="carousel-item ">
              <Box className="container ">
                <Box className="row">
                  <Box className="col-md-7 col-lg-6 ">
                    <Box className="detail-box">
                      <h1>
                        <span>Embrace Style</span>
                        <br />
                        Trendy Fashion
                      </h1>
                      <Typography>
                        Dive into a world of feminine elegance and contemporary
                        flair with our diverse range of women's fashion. Whether
                        you're seeking casual chic or sophisticated glamour, we
                        have the perfect pieces to reflect your unique style.
                      </Typography>
                      <Box className="btn-box">
                        <CustomButton
                          title="Shop Now"
                          marginTop="15px"
                          width="190px"
                          height="50px"
                          borderRadius="4px"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box className="carousel-item">
              <Box className="container ">
                <Box className="row">
                  <Box className="col-md-7 col-lg-6 ">
                    <Box className="detail-box">
                      <h1>
                        <span>Adorable</span>
                        <br />
                        Fashion for Kids
                      </h1>
                      <Typography>
                        Explore our playful selection of children's clothing,
                        designed to withstand playtime adventures while keeping
                        them looking stylish.
                      </Typography>
                      <Box className="btn-box">
                        <CustomButton
                          title="Shop Now"
                          marginTop="15px"
                          width="190px"
                          height="50px"
                          borderRadius="4px"
                        />
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box className="container">
            <ol className="carousel-indicators">
              <li
                data-target="#customCarousel1"
                data-slide-to={0}
                className="active"
              />
              <li data-target="#customCarousel1" data-slide-to={1} />
              <li data-target="#customCarousel1" data-slide-to={2} />
            </ol>
          </Box>
        </Box>
      </section>
    </Box>
  );
};

export default Hero;
