import Button from "../components/Button";

const LoginForm = () => {
  return (
    <form>
      <div className="mb-3">
        <label className="font-medium mb-2 flex">Username</label>
        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded-md bg-transparent border-gray-400 p-3"
        />
      </div>
      <div className="mb-3">
        <label className="font-medium mb-2 flex">Password</label>
        <input
          type="password"
          placeholder="*********"
          className="w-full border rounded-md bg-transparent border-gray-400 p-3"
        />
      </div>
      <div className="flex justify-between items-center mb-6 mt-6">
        <Button name="Log in" />
        <span className="font-medium mb-2 flex cursor-pointer hover:underline">
          Forgot Password?
        </span>
      </div>
      <div className="mt-4 flex justify-between items-center">
        Dont have an account yet?
        <span className="mt-2 text-green-700 cursor-pointer font-medium mb-2 hover:underline">
          Sign up
        </span>
      </div>
    </form>
  );
};

export default LoginForm;
