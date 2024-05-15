import React from "react";
import { Box, Typography } from "@mui/material";
import CustomButton from "../sharedComponent/CustomButton";

const Offers = () => {
  return (
    <section className="arrival_section">
      <Box className="container">
        <Box className="box">
          <Box className="arrival_bg_box">
            <img src="images/arrival-bg.png" alt="" />
          </Box>
          <Box className="row">
            <Box className="col-md-6 ml-auto">
              <Box className="heading_container remove_line_bt">
                <h2>#NewArrivals</h2>
              </Box>
              <Typography style={{ marginTop: 20, marginBottom: 30 }}>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which don't look even
                slightly believable. If you are going to use a passage of Lorem
                Ipsum, you need to be sure there isn't anything embarrassing
                hidden in the middle of text.
              </Typography>
              <CustomButton
                title="Shop Now"
                marginTop="15px"
                width="150px"
                height="50px"
                borderRadius="35px"
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Offers;
