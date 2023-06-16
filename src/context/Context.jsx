import { createContext, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const Context = createContext();

// eslint-disable-next-line react/prop-types
export const Provider = ({ children }) => {
  const [articleData, setArticleData] = useState([]);
  const [forumData, setForumData] = useState([]);
  const [forumDetails, setForumDetails] = useState([]);

  const { id } = useParams();
  const navigate = useNavigate();

  //fuction register user
  const handleRegisterUser = async (
    fullName,
    password,
    email,
    phoneNumber,
    age,
    city,
    country,
    picture
  ) => {
    try {
      const formData = new FormData();
      formData.append("fullname", fullName);
      formData.append("password", password);
      formData.append("email", email);
      formData.append("no_hp", phoneNumber);
      formData.append("age", age);
      formData.append("city", city);
      formData.append("country", country);
      formData.append("picture", picture);

      const res = await fetch(
        "https://backend-service-dev.up.railway.app/register",
        {
          method: "POST",
          body: formData,
        }
      );
      const result = await res.json();
      console.log(result);
      result && navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  //function login user
  const handleLoginUser = async (email, password) => {
    try {
      const response = await fetch(
        "https://backend-service-dev.up.railway.app/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            email: email,
            password: password,
          }),
        }
      );
      const result = await response.json();

      console.log(result);

      localStorage.setItem("user", JSON.stringify(result));
      result && navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  //function get data article
  const getArticleData = async () => {
    try {
      const response = await fetch(
        "https://backend-service-dev.up.railway.app/news"
      );
      const result = await response.json();
      setArticleData(result);
      console.log(articleData);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getArticleData();
  }, []);

  //function get forum details
  const getForumsDetails = async () => {
    try {
      const response = await fetch(
        `https://backend-service-dev.up.railway.app/forums/${id}`
      );
      const result = await response.json();
      setForumDetails(result);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getForumsDetails();
  }, []);

  //function get forum data
  const getForumData = async () => {
    try {
      const response = await fetch(
        "https://backend-service-dev.up.railway.app/forums"
      );
      const result = await response.json();
      setForumData(result.data);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getForumData();
  }, []);

  //function post forums
  const handlePostForum = async (author, title, thumbnail, description) => {
    const user = JSON.parse(localStorage.getItem("user"));
    console.log(user.token);
    try {
      const formData = new FormData();
      formData.append("author", author);
      formData.append("title", title);
      formData.append("descrition", description);
      formData.append("picture", thumbnail);

      const response = await fetch(
        "https://backend-service-dev.up.railway.app/forums",
        {
          method: "POST",
          headers: {
            Authorization: user.token,
          },
          body: formData,
        }
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Context.Provider
      value={{
        handleRegisterUser,
        handleLoginUser,
        articleData,
        forumData,
        forumDetails,
        handlePostForum,
      }}
    >
      {children}
    </Context.Provider>
  );
};
