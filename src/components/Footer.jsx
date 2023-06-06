import { NavLink } from "react-router-dom";
import { FaInstagramSquare } from "react-icons/fa";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";

const Footer = () => {
  const navList = [
    { id: 1, menu: "home", link: "/" },
    { id: 2, menu: "about", link: "/about" },
    { id: 3, menu: "article", link: "/article" },
    { id: 4, menu: "forum", link: "/forum" },
  ];

  return (
    <div className="bg-[#237804] border-gray-200 text-white">
      <div className="flex flex-wrap justify-between max-w-screen-xl mx-auto items-center p-8">
        <div className="flex flex-col items-start w-full mb-8 xl:w-2/5">
          <img
            src="https://aseanyouthforum.org/wp-content/uploads/2019/03/cropped-Logo-Asean-Youth-Forum-HR-01.png"
            alt="asean youth forum"
            className="h-24 mr-3"
          />
          <p>
            A movement that represents the youth in ASEAN to voice out their
            concerns and strategise for ways to achieve a better ASEAN
            Community.
          </p>
        </div>
        <div className="flex flex-col items-left w-full mb-8 px-0 xl:w-2/5 xl:px-32">
          <h1 className="font-bold">ASEAN Youth Forum</h1>
          <ul>
            {navList.map((item) => (
              <li key={item.id}>
                <NavLink to={item.link} className="capitalize">
                  {item.menu}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-start w-full px-0 xl:w-1/5">
          <h1 className="font-bold pb-4">Connect with Us</h1>
          <div className="flex gap-x-4 items-start">
            <FaInstagramSquare size={20} />
            <BsFacebook size={20} />
            <AiFillTwitterCircle size={25} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
