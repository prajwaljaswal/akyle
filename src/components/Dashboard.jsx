import { Box, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import cardLogo from "../assests/logow.svg";
import Slider from "react-slick";
import { articlesCall } from "../API/API_CALL";
import { IoIosLogOut } from "react-icons/io";
import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";
const Dashboard = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    articlesCall()
      .then((res) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {});
  }, []);
  const navigate = useNavigate();
  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/");
    }
  });

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>

      <Box sx={{ backgroundColor: "black" }}>
        <ToastContainer />
        <Box sx={{ padding: "25px" }}>
          <Grid container>
            <Grid item>
              <img src={cardLogo} alt="logo" />
              <IoIosLogOut
                color="white"
                size={40}
                style={{ marginLeft: "25px", cursor: "pointer" }}
                onClick={() => {
                  localStorage.clear();
                  navigate("/");
                }}
              />
              <Box
                sx={{
                  color: "white",
                  fontFamily: "MyCustomFont",
                  fontSize: "48px",
                  marginTop: "42px",
                  fontWeight: "500",
                }}
              >
                Welcome{" "}
                <span style={{ textDecoration: "underline" }}>Test</span>
              </Box>

              <Box
                sx={{
                  fontSize: "24px",
                  color: "white",
                  fontFamily: "MyCustomFont",
                  marginTop: "16px",
                }}
              >
                Hope you're having a good day!
              </Box>

              <Box
                sx={{
                  color: "white",
                  fontFamily: "MyCustomFont",
                  fontSize: "48px",
                  marginTop: "50px",
                }}
              >
                Photography
              </Box>
            </Grid>
          </Grid>

          <Slider {...settings} style={{ marginTop: "40px" }}>
            {data?.map((data, index) => (
              <div key={index}>
                {" "}
                {/* Adding horizontal padding */}
                <img
                  src={data?.image_url}
                  alt="Card logo"
                  style={{
                    borderRadius: "40px",
                    width: "95%", // Make sure the image fits the container
                    height: "auto", // Adjust height to maintain aspect ratio
                    objectFit: "contain", // Ensures the image scales proportionally
                  }}
                />
              </div>
            ))}
          </Slider>

          <Box
            sx={{
              color: "white",
              fontFamily: "MyCustomFont",
              fontSize: "48px",
              marginTop: "100px",
            }}
          >
            Learning
          </Box>

          <Slider {...settings} style={{ marginTop: "40px" }}>
            {data?.map((data, index) => (
              <div key={index}>
                {" "}
                {/* Adding horizontal padding */}
                <img
                  src={data?.image_url}
                  alt="Card logo"
                  style={{
                    borderRadius: "40px",
                    width: "95%", // Make sure the image fits the container
                    height: "auto", // Adjust height to maintain aspect ratio
                    objectFit: "contain", // Ensures the image scales proportionally
                  }}
                />
              </div>
            ))}
          </Slider>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
