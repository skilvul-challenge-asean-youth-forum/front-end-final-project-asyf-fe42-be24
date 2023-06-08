const TextField = ({ type, placeHolder }) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      className="w-full border rounded-md bg-transparent border-gray-400 p-3 h-10 bg-slate-50 focus:outline-slate-400"
    />
  );
};

export default TextField;
