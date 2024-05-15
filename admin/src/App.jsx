import React from "react";
import Navbar from "./components/navbar/Navbar";
import Admin from "./pages/Admin/Admin";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Admin />
    </Box>
  );
};

export default App;
