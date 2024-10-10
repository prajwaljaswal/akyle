import logo from "./logo.svg";
import "./App.css";
import { GlobalStyles } from "@mui/material";
import AuthLayout from "./AuthLayout";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import CustomCard from "./components/LoginStepper";
import LoginLayout from "./LoginLayout";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <>
      <GlobalStyles
        styles={{
          "@font-face": {
            fontFamily: "MyCustomFont",
            src: `url('../src/fonts/p.otf') format('otf')`,
          },
        }}
      />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AuthLayout />}>
            <Route index element={<CustomCard />}></Route>
          </Route>
        </Routes>
        <Routes>
          <Route path="/dashboard" element={<LoginLayout />}>
            <Route index element={<Dashboard />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
