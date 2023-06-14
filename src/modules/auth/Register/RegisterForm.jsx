import Button from "@/components/Button/Button";
import TextField from "@/components/TextField";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "@/context/UserContext";

const RegisterForm = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const ctx = useContext(UserContext);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        ctx.handleRegisterUser(userName, password, email);
      }}
      className="flex flex-col gap-y-4"
    >
      <TextField
        type="text"
        value={userName}
        placeHolder="Username"
        onChange={(e) => setUserName(e.target.value)}
      />
      <TextField
        type="email"
        value={email}
        placeHolder="Example@site.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      {/* <TextField type="text" placeHolder="Your Country" /> */}
      <TextField
        type="password"
        value={password}
        placeHolder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      {/* <TextField type="password" placeHolder="Confirm Password" /> */}

      <Button
        type="submit"
        textColor="text-white"
        bgColor="bg-[#237804]"
        name="Register"
      />
      <div>
        <p>
          Already have account?{" "}
          <Link to="/login" className="text-blue-500 underline">
            Login
          </Link>
        </p>
      </div>
    </form>
  );
};

export default RegisterForm;
