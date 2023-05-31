const Button = ({ name }) => {
  return (
    <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#389E0D] hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
      {name}
    </button>
  );
};

export default Button;
