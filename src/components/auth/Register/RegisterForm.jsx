import Button from "@/components/Button/Button";
import TextField from "@/components/TextField";
import { Link } from "react-router-dom";

const RegisterForm = () => {
  return (
    <form className="flex flex-col gap-y-4">
      <TextField type="text" placeHolder="Username" />
      <TextField type="email" placeHolder="Example@site.com" />
      <TextField type="text" placeHolder="Your Country" />
      <TextField type="password" placeHolder="Password" />
      <TextField type="password" placeHolder="Confirm Password" />

      <Button textColor="text-white" bgColor="bg-[#237804]" name="Register" />
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
