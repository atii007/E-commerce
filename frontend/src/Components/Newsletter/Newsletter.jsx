import React from "react";
import { Box } from "@mui/material";
import CustomButton from "../sharedComponent/CustomButton";

const Newsletter = () => {
  return (
    <section className="subscribe_section">
      <Box className="container-fuild">
        <Box className="box">
          <Box className="row">
            <Box className="col-md-6 offset-md-3">
              <Box className="subscribe_form ">
                <Box className="heading_container heading_center">
                  <h3>Subscribe To Get Discount Offers</h3>
                </Box>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor
                </p>
                <form action="">
                  <input type="email" placeholder="Enter your email" />
                  <CustomButton
                    title="SUBSCRIBE"
                    marginTop="15px"
                    width="150px"
                    height="50px"
                    borderRadius="35px"
                  />
                </form>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default Newsletter;
