import { AiOutlineSearch } from "react-icons/ai";

const SearchField = () => {
  return (
    <div className="flex items-center justify-between w-1/2 md:w-auto border bg-white border-gray-300 rounded overflow-hidden">
      <input
        type="text"
        placeholder="Search"
        className="md:w-[242px] p-2 focus:outline-none"
      />
      <div className="p-2 text-gray-400">
        <AiOutlineSearch size={20} />
      </div>
    </div>
  );
};

export default SearchField;
