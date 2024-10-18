import React from "react";
import Hero from "../Components/Hero/Hero";
import Popular from "../Components/Popular/Popular";
import Offers from "../Components/Offers/Offers";
import NewCollections from "../Components/NewCollections/NewCollections";
import Newsletter from "../Components/Newsletter/Newsletter";
import { Box } from "@mui/material";
import WhyUs from "../Components/WhyUs/WhyUs";

const Shop = () => {
  return (
    <Box>
      <Hero />
      <WhyUs />
      <Popular />
      <Offers />
      <NewCollections />
      <Newsletter />
    </Box>
  );
};

export default Shop;
