import React from "react";
import { Box } from "@mui/material";

const StatBoxContainer = ({ gridColumn, backgroundColor, children }) => {
  return (
    <Box
      gridColumn={gridColumn}
      backgroundColor={backgroundColor}
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="220px"
      boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
      borderRadius="5px"
    >
      {children}
    </Box>
  );
};

export default StatBoxContainer;
