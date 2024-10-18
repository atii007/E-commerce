"use client";

import React, { useEffect, useState } from "react";

import Item from "../Item/Item";

import { Box } from "@mui/material";

const Popular = () => {
  const [popularInWomen, setPopularInWomen] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/popularinwomen")
      .then((response) => response.json())
      .then((data) => setPopularInWomen(data));
  }, []);

  return (
    <section className="product_section layout_padding">
      <Box className="container">
        <Box className="heading_container heading_center">
          <h2>
            Women's <span>Choice</span>
          </h2>
        </Box>
        <Box className="row">
          {popularInWomen.map((item, i) => {
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

export default Popular;
