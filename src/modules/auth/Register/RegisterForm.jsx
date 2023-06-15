import Button from "@/components/Button/Button";
import TextField from "@/components/TextField";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { Context } from "@/context/Context";

const RegisterForm = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("");
  const [city, setCity] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  const [picture, setPicture] = useState(null);
  const [age, setAge] = useState("");
  const ctx = useContext(Context);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        ctx.handleRegisterUser(
          fullName,
          email,
          password,
          phoneNumber,
          age,
          city,
          country,
          picture
        );
      }}
      className="flex flex-col gap-y-3"
    >
      <TextField
        type="text"
        value={fullName}
        placeHolder="Full Name"
        onChange={(e) => setFullName(e.target.value)}
      />
      <TextField
        type="email"
        value={email}
        placeHolder="Example@site.com"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        type="text"
        value={age}
        placeHolder="age"
        onChange={(e) => setAge(e.target.value)}
      />
      <TextField
        type="text"
        value={phoneNumber}
        placeHolder="Phone Number"
        onChange={(e) => setPhoneNumber(e.target.value)}
      />
      <TextField
        type="text"
        value={country}
        placeHolder="Your Country"
        onChange={(e) => setCountry(e.target.value)}
      />
      <TextField
        type="text"
        value={city}
        placeHolder="Your City"
        onChange={(e) => setCity(e.target.value)}
      />
      <TextField
        type="file"
        accept="image/*"
        onChange={(e) => setPicture(e.target.files[0])}
      />
      <TextField
        type="password"
        value={password}
        placeHolder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />

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
