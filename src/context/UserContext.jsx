import { createContext } from "react";
import { useNavigate } from "react-router-dom";
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const navigate = useNavigate();
  const handleRegisterUser = async (userName, password, email) => {
    try {
      const res = await fetch(
        "https://backend-service-dev.up.railway.app/register",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username: userName,
            password: password,
            email: email,
          }),
        }
      );
      const result = await res.json();
      console.log(result);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  const handleLoginUser = async (userName, password) => {
    try {
      const response = await fetch(
        "https://backend-service-dev.up.railway.app/login",
        {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify({
            username: userName,
            password: password,
          }),
        }
      );
      const result = await response.json();

      console.log(result);
      // localStorage.setItem("user", result);
      localStorage.setItem("access_token", result.token);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <UserContext.Provider value={{ handleRegisterUser, handleLoginUser }}>
      {children}
    </UserContext.Provider>
  );
};
