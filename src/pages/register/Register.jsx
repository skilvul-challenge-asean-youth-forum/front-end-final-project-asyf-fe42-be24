import RegisterForm from "../../components/RegisterForm/RegisterForm";
import MainLayout from "../../layouts/main-layout";
const Register = () => {
  return (
    <MainLayout>
      <div className="flex flex-col flex-auto w-full h-screen">
        <div className="h-full">
          <div className="grid lg:grid-cols-2 h-full">
            <img
              className="w-full h-full object-cover object-center lg:flex bg-no-repeat hidden"
              src="https://thaivolunteer.org/eng/wp-content/uploads/2013/09/ayf_update2010.jpg"
              alt="Loginbg"
            />
            <div className="flex justify-center p-11 text-center">
              <div className="w-4/5 px-3">
                <div className="mb-8">
                  <h1 className="text-4xl font-bold">Welcome</h1>
                  <p className="text-xl mt-2">Please Register your Account</p>
                </div>
                <RegisterForm />
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
