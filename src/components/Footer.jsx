import { Box } from "@mui/material";
import Grid from "@mui/material/Grid";
import React from "react";
import facebook from "../assests/facebook.svg";
import instagram from "../assests/instagram.png";
import twitter from "../assests/twitter.png";
import youtube from "../assests/youtube.svg";
import twitch from "../assests/twitch.png";

const Footer = () => {
  return (
    <Box
      sx={{
        paddingTop: "7rem",
        paddingBottom: "7rem",
        width: "100%",
        marginTop: "3rem",
        backgroundColor: "black",
      }}
    >
      {/* Social Media Icons */}
      <Grid container sx={{paddingLeft:{lg:"205px"}} }>
        <Grid item xs={2} md={1} lg={0.65} sx={{ cursor: "pointer" }}>
          <img src={facebook} alt="facebook" style={{ width: "50px", height: "50px" }} />
        </Grid>
        <Grid item xs={2} md={1} lg={0.65} sx={{ cursor: "pointer" }}>
          <img src={instagram} alt="instagram" />
        </Grid>
        <Grid item xs={2} md={1} lg={0.65} sx={{ cursor: "pointer" }}>
          <img src={twitter} alt="twitter" />
        </Grid>
        <Grid item xs={2} md={1} lg={0.65} sx={{ cursor: "pointer" }}>
          <img src={twitch} alt="twitch" />
        </Grid>
        <Grid item xs={2} md={1} lg={0.65} sx={{ cursor: "pointer" }}>
          <img src={youtube} alt="youtube" />
        </Grid>
      </Grid>

      {/* Text Links */}
      <Box sx={{ marginLeft: "15px", marginTop: "100px",paddingLeft:{lg:"205px"} }}>
        <Grid container spacing={1}>
          <Grid item xs={6} md={12}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2.4} lg={2.1}>
                <Box sx={{ color: "white", cursor: "pointer", fontWeight: "600", fontFamily: "MyCustomFont" }}>
                  Privacy Policy
                </Box>
              </Grid>
              <Grid item xs={12} md={2.4} lg={2.1}>
                <Box sx={{ color: "white", cursor: "pointer", fontWeight: "600", fontFamily: "MyCustomFont" }}>
                  Contact Us
                </Box>
              </Grid>
              <Grid item xs={12} md={2.4} lg={2.1}>
                <Box sx={{ color: "white", cursor: "pointer", fontWeight: "600", fontFamily: "MyCustomFont" }}>
                  Cookie Preferences
                </Box>
              </Grid>
              <Grid item xs={12} md={2.4} lg={2.1}>
                <Box sx={{ color: "white", cursor: "pointer", fontWeight: "600", fontFamily: "MyCustomFont" }}>
                  Corporate Information
                </Box>
              </Grid>
            </Grid>
          </Grid>

          {/* Second row of text links */}
          <Grid item xs={6} md={12} sx={{ marginTop: { lg: "15px" } }}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={2.4} lg={2.1}>
                <Box sx={{ color: "white", cursor: "pointer", fontWeight: "600", fontFamily: "MyCustomFont" }}>
                  Terms of Use
                </Box>
              </Grid>
              <Grid item xs={12} md={2.4} lg={2.1}>
                <Box sx={{ color: "white", cursor: "pointer", fontWeight: "600", fontFamily: "MyCustomFont" }}>
                  Help Center
                </Box>
              </Grid>
              <Grid item xs={12} md={2.4} lg={2.1}>
                <Box sx={{ color: "white", cursor: "pointer", fontWeight: "600", fontFamily: "MyCustomFont" }}>
                  Legal Notices
                </Box>
              </Grid>
              <Grid item xs={12} md={2.4} lg={2.1}>
                <Box sx={{ color: "white", cursor: "pointer", fontWeight: "600", fontFamily: "MyCustomFont" }}>
                  Careers
                </Box>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Box>

      {/* Copyright */}
      <Box
        sx={{
          color: "white",
          marginLeft: "15px",
          paddingTop: "50px",
          fontFamily: "MyCustomFont",
          paddingLeft:{lg:"205px"}
        }}
      >
        {'\u00A9'} Alkye Test
      </Box>
    </Box>
  );
};

export default Footer;
