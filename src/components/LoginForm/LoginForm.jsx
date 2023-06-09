import Button from "@/components/Button/Button";
import TextField from "@/components/TextField";
import { Link } from "react-router-dom";
const LoginForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="font-medium mb-2 flex">Username</label>
        <TextField type="text" placeHolder="Jhon doe" />
      </div>
      <div className="mb-3">
        <label className="font-medium mb-2 flex">Password</label>
        <TextField type="password" placeHolder="********" />
      </div>
      <div className="flex justify-between items-center mb-6 mt-6">
        <Button name="Log in" />
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
