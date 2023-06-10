import { NavLink, Link } from "react-router-dom";
import { useScrollPosition } from "@/modules/Common";
import Button from "@/components/Button/Button";
import { useState } from "react";
import { FaTimes, FaBars } from "react-icons/fa";

const Navbar = () => {
  const { isScrolling } = useScrollPosition();
  const [navListItem, setNavListItem] = useState(false);
  const navList = [
    { id: 1, menu: "home", link: "/" },
    { id: 2, menu: "about", link: "/about" },
    { id: 3, menu: "article", link: "/article" },
    { id: 4, menu: "forum", link: "/forum" },
  ];

  const navLinkActive = ({ isActive }) => {
    return isActive
      ? "text-yellow-400 capitalize md:underline underline-offset-8 decoration-2 underline-radius-8"
      : "text-white capitalize";
  };
  return (
    <nav
      className={`${
        isScrolling
          ? "backdrop-blur-md  bg-opacity-40 "
          : "backdrop-blur-0 bg-opacity-100"
      } border-gray-200 text-white sticky bg-[#237804] top-0`}
    >
      <div className="flex flex-wrap justify-between max-w-screen-xl mx-auto items-center p-4 drop-shadow-md">
        <div className="flex items-center w-full md:w-auto justify-between gap-x-12 px-4 md:px-0">
          <figure className="flex items-center ">
            <img
              src="https://aseanyouthforum.org/wp-content/uploads/2019/03/cropped-Logo-Asean-Youth-Forum-HR-01.png"
              alt="asean youth forum"
              className="h-12 mr-3 filter brightness-110"
            />
          </figure>
          <ul className="md:flex md:gap-x-8 md:text-md font-medium hidden">
            {navList.map((item) => (
              <li key={item.id}>
                <NavLink to={item.link} className={navLinkActive}>
                  {item.menu}
                </NavLink>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setNavListItem(!navListItem)}
            className="cursor-pointer text-white md:hidden "
          >
            {navListItem ? <FaTimes size={30} /> : <FaBars size={30} />}
          </div>
        </div>

        {navListItem && (
          <ul
            className={`${
              isScrolling
                ? "backdrop-blur-sm bg-opacity-40"
                : "backdrop-blur-0 bg-opacity-100"
            } flex flex-col justify-center items-start absolute top-20 left-0 bg-[#2f8108] w-full h-auto font-medium md:hidden z-10 px-8 py-4 gap-y-3 text-xl`}
          >
            {navList.map((item) => (
              <li key={item.id}>
                <NavLink to={item.link} className={navLinkActive}>
                  {item.menu}
                </NavLink>
              </li>
            ))}
            <div className="flex gap-x-3">
              <Link to="/login">
                <Button
                  textColor="text-[#237804]"
                  bgColor="bg-white"
                  name="Log in"
                />
              </Link>
            </div>
          </ul>
        )}

        <div className=" md:flex md:gap-x-3 hidden ">
          <Link to="/login">
            <Button
              textColor="text-[#237804]"
              bgColor="bg-white"
              name="Log in"
            />
          </Link>
          <Link to="/register">
            <Button
              textColor="text-[#237804]"
              bgColor="bg-white"
              name="Register"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
