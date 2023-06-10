const Button = ({ name, bgColor, textColor, type }) => {
  return (
    <button
      type={type}
      className={`inline-flex justify-center items-center py-2 px-5 text-base font-medium text-center ${textColor} rounded-lg ${bgColor} hover:bg-lime-500 hover:text-white focus:ring-2 ring-slate-50`}
    >
      {name}
    </button>
  );
};

export default Button;
