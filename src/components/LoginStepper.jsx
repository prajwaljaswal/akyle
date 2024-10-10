import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Grid, InputAdornment } from "@mui/material";
import cardLogo from "../assests/Group.svg";
import TextField from "@mui/material/TextField";
import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';
import { loginCall } from "../API/API_CALL";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'; 
import { useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

const CustomCard = () => {
  const [step, setStep] = useState(0);
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const [inputType, setInputType] = useState("password")
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()

  const data ={
    username: email,
    password: password
}
  useEffect(()=>{
    setEmail("")
    setPassword("")

    if(localStorage.getItem("token")){
      navigate("/dashboard")
    }
  },[])

  const onSubmit = ()=>{
    setLoading(true)
    loginCall(data).then((res)=>{
      navigate("/dashboard")
      toast.success('Login Successful', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "colored",
      });
      setEmail("")
      setPassword("")
      setLoading(false)
      localStorage.setItem("token",res?.token)
      localStorage.setItem("user",res?.user_id)
    }).catch((err)=>{
      setStep(0)
      localStorage.clear()
      setLoading(false)
      toast.error('Wrong email or password', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: false,
        theme: "colored",
      });
    })
  }
  return (
    <>
    <ToastContainer/>
     <Backdrop
        sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
        open={loading}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      {step === 0 ? (
        <Box sx={{ background: "f5f5f5" }}>
          <Box
            sx={{
              padding: { xs: "20px", md: "70px" },
            }}
          >
            <Card
              sx={{
                minWidth: "40%",
                padding: { xs: "10px", md: "100px" },
                borderRadius: "50px",
              }}
            >
              <CardContent>
                <Grid container>
                  <Grid item xs={12} lg={6}>
                    <Typography variant="h5" component="div">
                      <img src={cardLogo} alt="image" />
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "50px",
                        fontFamily: "MyCustomFont",
                        fontSize: { xs: "12px", md: "24px" },
                        fontWeight: "400",
                      }}
                    >
                      STEP 1
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: { xs: "24px", md: "48px" },
                        color: "#000000",
                        fontFamily: "MyCustomFont",
                        marginTop: "-10px",
                      }}
                    >
                      Enter your email
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "-15px",
                        fontWeight: "500",
                        fontSize: { xs: "24px", md: "48px" },
                        color: "#000000",
                        fontFamily: "MyCustomFont",
                      }}
                    >
                      address to continue
                    </Typography>

                    <Box
                      sx={{
                        marginTop: { xs: "10px", md: "35px" },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: { xs: "12px", md: "24px" },
                          color: "#000000",
                          fontFamily: "MyCustomFont",
                        }}
                      >
                        Log in to your account. If you don’t have
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: { xs: "12px", md: "24px" },
                          color: "#000000",
                          fontFamily: "MyCustomFont",
                        }}
                      >
                        one, you will be prompted to create one.
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Box
                      sx={{
                        marginTop: { xs: "60px", md: "145px" },
                        width: { sx: "100%", lg: "650px" },
                      }}
                    >
                      <TextField sx={{ width: "100%" }} placeholder="Email" onChange={(e)=>setEmail(e?.target?.value)} value={email} />

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{
                            marginTop: "42px",
                            textDecoration: "underline",
                            cursor: "pointer",
                            fontFamily: "MyCustomFont",
                          }}
                        >
                          Have an account ?
                        </Box>
                        <Button
                          onClick={() => setStep(1)}
                          sx={{
                            marginTop: { xs: "25px", md: "20px" },
                            backgroundColor: "black",
                            color: "white",
                            textTransform: "none",
                            fontFamily: "MyCustomFont",
                            fontWeight: "800",
                            fontSize: { xs: "16px", md: "24px" },
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            paddingLeft: "45px",
                            paddingRight: "45px",
                            display: "flex",
                            justifyContent: "flex-end",
                          }}
                        >
                          Continue
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </CardContent>
            </Card>
          </Box>
        </Box>
      ) : (
        <Box sx={{ background: "f5f5f5" }}>
          <Box
            sx={{
              padding: { xs: "20px", md: "70px" },
            }}
          >
            <Card
              sx={{
                minWidth: "40%",
                padding: { xs: "10px", md: "100px" },
                borderRadius: "50px",
              }}
            >
              <CardContent>
                <Grid container>
                  <Grid item xs={12} lg={6}>
                    <Typography variant="h5" component="div">
                      <img src={cardLogo} alt="image" />
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "50px",
                        fontFamily: "MyCustomFont",
                        fontSize: { xs: "12px", md: "24px" },
                        fontWeight: "400",
                      }}
                    >
                      STEP 2
                    </Typography>
                    <Typography
                      sx={{
                        fontWeight: "500",
                        fontSize: { xs: "24px", md: "48px" },
                        color: "#000000",
                        fontFamily: "MyCustomFont",
                        marginTop: "-10px",
                      }}
                    >
                      Create an account to
                    </Typography>
                    <Typography
                      sx={{
                        marginTop: "-15px",
                        fontWeight: "500",
                        fontSize: { xs: "24px", md: "48px" },
                        color: "#000000",
                        fontFamily: "MyCustomFont",
                      }}
                    >
                      Continue
                    </Typography>

                    <Box
                      sx={{
                        marginTop: { xs: "10px", md: "35px" },
                      }}
                    >
                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: { xs: "12px", md: "24px" },
                          color: "#000000",
                          fontFamily: "MyCustomFont",
                        }}
                      >
                        You’ll be able to log in to Dingoo with this
                      </Typography>

                      <Typography
                        sx={{
                          fontWeight: "400",
                          fontSize: { xs: "12px", md: "24px" },
                          color: "#000000",
                          fontFamily: "MyCustomFont",
                        }}
                      >
                        email address and password.
                      </Typography>
                    </Box>
                  </Grid>

                  <Grid item xs={12} lg={6}>
                    <Box
                      sx={{
                        marginTop: { xs: "60px", md: "145px" },
                        width: { sx: "100%", lg: "650px" },
                      }}
                    >
                      <TextField
                        sx={{ width: "100%" }}
                        placeholder="Choose a password"
                        onChange={(e)=>setPassword(e?.target?.value)}
                        value={password}
                        type={inputType}
                        InputProps={{
                          endAdornment: (
                            <InputAdornment position="end" sx={{
                              cursor:"pointer"
                            }} onClick={()=>{
                              if(inputType=="password"){
                                setInputType("text")
                              }
                              else{
                                setInputType("password")
                              }
                            }}>
                              {inputType=="password" ? <FaEyeSlash/> :<FaRegEye/>}
                            </InputAdornment>
                          ),
                        }}
                      />
                      

                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "space-between",
                        }}
                      >
                        <Box
                          sx={{
                            marginTop: "30px",
                            cursor: "pointer",
                            fontFamily: "MyCustomFont",
                          }}
                        >
                          {`Use a minimum of 6 characters (case sensitive)
                 with at least one number or special character.`}
                        </Box>
                        <Button
                        onClick={onSubmit}
                          sx={{
                            marginTop: { xs: "25px", md: "20px" },
                            backgroundColor: "black",
                            color: "white",
                            textTransform: "none",
                            fontFamily: "MyCustomFont",
                            fontWeight: "800",
                            fontSize: { xs: "16px", md: "24px" },
                            paddingTop: "10px",
                            paddingBottom: "10px",
                            paddingLeft: { xs: "0", md: "45px" },
                            paddingRight: { xs: "0", md: "45px" },
                            display: "flex",
                            justifyContent: "center",
                            width: "450px",
                          }}
                        >
                          Agree & Continue
                        </Button>
                      </Box>
                    </Box>
                  </Grid>
                </Grid>

                <Box
                  sx={{
                    marginTop: "3rem",
                    lineHeight: 1.6,
                    fontFamily: "MyCustomFont",
                    fontSize: "14px",
                    // Adds padding inside the box
                  }}
                >
                  Dingoo will use your data to personalise and improve your
                  Dingoo experience and to send you information about Dingoo.
                  You can change your communication preferences anytime. We may
                  use your data as described in
                </Box>
                <Box
                  sx={{
                    lineHeight: 1.6,
                    fontFamily: "MyCustomFont",
                    fontSize: "14px",
                  }}
                >
                  our Privacy Policy, including sharing it with The Test of
                  Companies. By clicking "Agree & Continue", you agree to
                  our Subscriber Agreement and acknowledge that you have read
                  our Privacy Policy and Collection Statement.
                </Box>
              </CardContent>
            </Card>
          </Box>
        </Box>
      )}
    </>
  );
};

export default CustomCard;
