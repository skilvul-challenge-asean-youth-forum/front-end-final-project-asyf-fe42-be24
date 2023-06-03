import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navList = [
    { id: 1, menu: "home", link: "/" },
    { id: 2, menu: "about", link: "/about" },
    { id: 3, menu: "article", link: "/article" },
    { id: 4, menu: "forum", link: "/forum" },
  ];

  const navLinkActive = ({ isActive }) => {
    return isActive ? "text-yellow-400 capitalize" : "text-white capitalize";
  };
  return (
    <nav className="bg-[#237804] border-gray-200 dark:bg-gray-900 text-white sticky top-0">
      <div className="flex flex-wrap justify-between max-w-screen-xl mx-auto items-center p-4">
        <div className="flex items-center gap-x-12">
          <figure className="flex items-center">
            <img
              src="https://aseanyouthforum.org/wp-content/uploads/2019/03/cropped-Logo-Asean-Youth-Forum-HR-01.png"
              alt="asean youth forum"
              className="h-12 mr-3"
            />
            <figcaption>Asean youth forum</figcaption>
          </figure>
          <ul className="flex gap-x-8">
            {navList.map((item) => (
              <li key={item.id}>
                <NavLink to={item.link} className={navLinkActive}>
                  {item.menu}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className=" flex gap-x-3">
          <button type="button" className="border-r-2 border-x-white px-3">
            Login
          </button>
          <button type="button">Register</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
