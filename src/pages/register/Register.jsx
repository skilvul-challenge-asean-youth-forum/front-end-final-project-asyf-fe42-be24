import RegisterForm from "@/modules/auth/Register/RegisterForm";
import MainLayout from "@/layouts/main-layout";
const Register = () => {
  return (
    <MainLayout>
      <div className="flex flex-col flex-auto w-full h-screen">
        <div className="flex w-full h-full md:gap-x-48 ">
          <figure className="md:w-2/5">
            <img
              className="w-full h-full object-cover object-center md:flex bg-no-repeat hidden"
              src="https://thaivolunteer.org/eng/wp-content/uploads/2013/09/ayf_update2010.jpg"
              alt="Loginbg"
            />
          </figure>
          <div className="flex justify-center md:w-1/2  w-full items-center text-center ">
            <div className="md:w-3/5 ">
              <div className="mb-8">
                <h1 className="text-4xl font-bold">Welcome</h1>
                <p className="text-xl">Please Register your Account</p>
              </div>
              <RegisterForm />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
