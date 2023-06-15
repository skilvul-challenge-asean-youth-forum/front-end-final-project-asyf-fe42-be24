import { Routes, Route } from "react-router-dom";
import Home from "@/pages/homepage/Home";
import Login from "@/pages/loginpage/Login";
import About from "@/pages/about/About";
import Forum from "@/pages/forum/Forum";
import Register from "@/pages/register/Register";
import Article from "@/pages/article/Article";
import Addforum from "@/pages/addforum/Addforum";
import DetailForum from "@/pages/detailforum/Detailforum";
import ArticleDetails from "@/pages/article/ArticleDetails";

ArticleDetails;
export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/about" element={<About />} />
      <Route path="/articles">
        <Route index element={<Article />} />
        <Route
          path="/articles/articledetails/:id"
          element={<ArticleDetails />}
        />
      </Route>
      <Route path="/forums">
        <Route index element={<Forum />} />
        <Route path="/forums/addforum" element={<Addforum />} />
        <Route path="/forums/detailforum/:id" element={<DetailForum />} />
      </Route>
    </Routes>
  );
};
