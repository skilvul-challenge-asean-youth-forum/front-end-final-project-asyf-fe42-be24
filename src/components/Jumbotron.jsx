import Button from "@/components/Button/Button";
import { Link } from "react-router-dom";

const Jumbotron = () => {
  return (
    <header className="bg-center bg-no-repeat bg-[url('https://images.unsplash.com/photo-1517048676732-d65bc937f952?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80')] bg-gray-700 bg-blend-multiply">
      <section className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          ASEAN YOUTH FORUM
        </h1>
        <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
          A movement that represents the youth in ASEAN to voice out their
          concerns and strategise for ways to achieve a better ASEAN Community.
        </p>
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
          <Link to="/register">
            <Button
              textColor="text-white"
              bgColor="bg-[#237804]"
              name="Get Started"
            />
          </Link>
        </div>
      </section>
    </header>
  );
};

export default Jumbotron;
