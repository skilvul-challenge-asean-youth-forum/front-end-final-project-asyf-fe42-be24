import { Routes, Route } from "react-router-dom";
import Home from "@/pages/homepage/Home";
import Login from "@/pages/loginpage/Login";
import About from "@/pages/about/About";
import Forum from "@/pages/forum/Forum";
import Register from "@/pages/register/Register";
import Article from "@/pages/article/Article";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/forum" element={<Forum />} />
      <Route path="/article" element={<Article />} />
    </Routes>
  );
};
