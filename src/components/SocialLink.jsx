import { FaInstagramSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const SocialLink = () => {
  return (
    <section className="w-full flex flex-col gap-x-4 items-center justify-center text-lime-600 py-7 gap-y-8 h-1/2">
      <h1 className="text-4xl font-bold text-zinc-900">Follow Us !</h1>
      <div className="flex gap-x-4 items-center">
        <FaInstagramSquare size={60} />
        <BsFacebook size={60} />
        <AiFillTwitterCircle size={70} />
      </div>
    </section>
  );
};

export default SocialLink;
