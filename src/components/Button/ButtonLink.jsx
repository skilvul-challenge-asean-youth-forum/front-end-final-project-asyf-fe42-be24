import { IoMdAddCircle } from "react-icons/io";

const ButtonLink = () => {
  return (
    <button className="flex justify-center items-center py-3 px-4 text-sm font-medium gap-x-1  text-center text-white rounded-lg bg-[#389E0D] hover:bg-green-600 focus:ring-4">
      <IoMdAddCircle size={16} />
      Add Forum
    </button>
  );
};

export default ButtonLink;
