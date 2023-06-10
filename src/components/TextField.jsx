const TextField = ({ type, placeHolder, onChange, value }) => {
  return (
    <input
      type={type}
      placeholder={placeHolder}
      value={value}
      onChange={onChange}
      className="w-full border rounded-md  border-gray-400 p-3 h-10 bg-slate-50 focus:outline-slate-400"
    />
  );
};

export default TextField;
