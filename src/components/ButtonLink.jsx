import { IoMdAddCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const ButtonLink = () => {
  return (
    <Link
      to="/addForum" 
      className="flex justify-center items-center py-3 px-4 text-sm font-medium gap-x-1  text-center text-white rounded-lg bg-[#389E0D] hover:bg-green-600 focus:ring-4">
      <IoMdAddCircle size={16} />
      Add Forum
    </Link>
  );
};

export default ButtonLink;
