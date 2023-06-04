import { Routes, Route } from "react-router-dom";
import Home from "../pages/homepage/Home";
import Login from "../pages/loginpage/Login";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};
