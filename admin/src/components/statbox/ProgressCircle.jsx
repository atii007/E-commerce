import React from "react";
import { Box } from "@mui/material";

const ProgressCircle = ({ progress = "0.75", size = "40" }) => {
  const angle = progress * 360;
  return (
    <Box
      sx={{
        background: `radial-gradient(#f2f0f0 55%, transparent 56%),
        conic-gradient(transparent 0deg ${angle}deg, #002c3e ${angle}deg 360deg ), #f7444e`,
        borderRadius: "50%",
        width: `${size}px`,
        height: `${size}px`,
      }}
    />
  );
};

export default ProgressCircle;
