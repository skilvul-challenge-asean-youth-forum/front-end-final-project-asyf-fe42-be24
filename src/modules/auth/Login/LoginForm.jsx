import Button from "@/components/Button/Button";
import TextField from "@/components/TextField";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "@/context/Context";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const ctx = useContext(Context);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        ctx.handleLoginUser(email, password);
      }}
    >
      <div className="mb-3">
        <label className="font-medium mb-2 flex">Email</label>
        <TextField
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeHolder="Jhondoe@example.com"
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
