const Button = ({ name }) => {
  return (
    <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#389E0D] hover:bg-green-600 focus:ring-4 ">
      {name}
    </button>
  );
};

export default Button;
