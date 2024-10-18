import React from "react";
import StatBox from "../statbox/StatBox";
import StatBoxContainer from "../statbox/StatBoxContainer";
import { Box, IconButton, Typography } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import BarCharts from "../barchart/Barchart";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

const Dashboard = () => {
  return (
    <Box m="20px" sx={{ width: "100%" }}>
      <Box sx={{ mb: "20px" }}>
        <Typography
          variant="h5"
          color="#002c3e"
          fontWeight="bold"
          sx={{ mb: "5px" }}
        >
          Dashboard
        </Typography>
        <Typography variant="h6" color="#f7444e">
          Welcome to your personal dashboard
        </Typography>
      </Box>
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="20px"
      >
        {/* Row 1 */}
        <StatBoxContainer gridColumn="span 3" backgroundColor="#f2f0f0">
          <StatBox
            title="12,361"
            subtitle="Emails Sent"
            progress="0.75"
            increase="+14%"
            icon={<EmailIcon sx={{ color: "#f7444e", fontSize: "26px" }} />}
          />
        </StatBoxContainer>

        <StatBoxContainer gridColumn="span 3" backgroundColor="#f2f0f0">
          <StatBox
            title="331,225"
            subtitle="Sales Obtained"
            progress="0.5"
            increase="+21%"
            icon={
              <PointOfSaleIcon sx={{ color: "#f7444e", fontSize: "26px" }} />
            }
          />
        </StatBoxContainer>

        <StatBoxContainer gridColumn="span 3" backgroundColor="#f2f0f0">
          <StatBox
            title="231,121"
            subtitle="New Clients"
            progress="0.30"
            increase="+5%"
            icon={<PersonAddIcon sx={{ color: "#f7444e", fontSize: "26px" }} />}
          />
        </StatBoxContainer>

        <StatBoxContainer gridColumn="span 3" backgroundColor="#f2f0f0">
          <StatBox
            title="1,234,123"
            subtitle="Traffic Inbound"
            progress="0.80"
            increase="+43%"
            icon={<TrafficIcon sx={{ color: "#f7444e", fontSize: "26px" }} />}
          />
        </StatBoxContainer>
        {/* Row 2 */}
        <Box
          gridColumn="span 12"
          gridRow="span 3"
          backgroundColor="#f2f0f0"
          boxShadow="0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 3px 10px 0 rgba(0, 0, 0, 0.19)"
          borderRadius="5px"
        >
          <Box
            mt="20px"
            p="0 20px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="h5" fontWeight="600" color="#002c3e">
                Revenue Generated
              </Typography>
              <Typography variant="h4" fontWeight="bold" color="#002c3e">
                $59,342.32
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: "#f7444e" }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box>
            <BarCharts />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
