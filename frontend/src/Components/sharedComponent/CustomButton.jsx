import { Button, styled } from "@mui/material";
import React from "react";

const CustomButton = ({
  title,
  marginTop,
  width,
  height,
  borderRadius,
  onClick,
}) => {
  const ColorButton = styled(Button)(() => ({
    backgroundColor: "#f7444e",
    border: "1px solid #E72929",
    textTransform: "none",
    fontSize: "16px",
    color: "white",
    cursor: "pointer",
    padding: "10px",
    "&:hover": {
      backgroundColor: "transparent",
      border: "1px solid #ff4141",
      color: "#f7444e",
    },
  }));
  return (
    <ColorButton
      sx={{
        marginTop: { marginTop },
        width: { width },
        height: { height },
        borderRadius: { borderRadius },
      }}
      onClick={onClick}
    >
      {title}
    </ColorButton>
  );
};

export default CustomButton;
