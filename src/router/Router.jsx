import { Routes, Route } from "react-router-dom";
import Home from "../pages/homepage/Home";
import Login from "../pages/loginpage/Login";
import About from "../pages/about/About";
import Register from "../pages/register/Register";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
};
