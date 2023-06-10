import Button from "@/components/Button/Button";
import TextField from "@/components/TextField";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "@/context/UserContext";

const LoginForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { user } = useContext(UserContext);

  useEffect(() => {
    console.log({ user });
  }, [user]);

  const handleSubmit = () => {
    if (userName != user.name && password != user.password) {
      console.log("gagal");
    } else {
      console.log("sukses");
    }
  };
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
    >
      <div className="mb-3">
        <label className="font-medium mb-2 flex">Username</label>
        <TextField
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          type="text"
          placeHolder="Jhon doe"
        />
      </div>
      <div className="mb-3">
        <label className="font-medium mb-2 flex">Password</label>
        <TextField
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeHolder="********"
        />
      </div>
      <div className="flex justify-between items-center mb-6 mt-6">
        <Button
          type="submit"
          textColor="text-white"
          bgColor="bg-[#237804]"
          name="Log in"
        />
        <span className="font-medium mb-2 flex cursor-pointer hover:underline">
          Forgot Password?
        </span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        Dont have an account yet?
        <Link
          to="/register"
          className="mt-2 text-green-700 cursor-pointer font-medium mb-2 hover:underline"
        >
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
