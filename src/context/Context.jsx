import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const Context = createContext();

export const Provider = ({ children }) => {
  const [articleData, setArticleData] = useState([]);
  const navigate = useNavigate();

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
      formData.append("email", email);
      formData.append("password", password);
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
      if (formData !== "") {
        navigate("/login");
      } else {
        alert("Cannot be empty");
      }
    } catch (error) {
      console.log(error);
    }
  };
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

      localStorage.setItem("access_token", result.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };

  const getArticleData = async () => {
    const response = await fetch(
      "https://backend-service-dev.up.railway.app/news"
    );
    const result = await response.json();
    setArticleData(result);
    console.log(articleData);
  };

  return (
    <Context.Provider
      value={{ handleRegisterUser, handleLoginUser, getArticleData }}
    >
      {children}
    </Context.Provider>
  );
};
