import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

const AuthLayout = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh", // Ensure full viewport height
      }}
    >
      {/* Main content */}
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>

      {/* Footer */}
      <Footer />
    </Box>
  );
};

export default AuthLayout;
