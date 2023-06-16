const Card = ({ children }) => {
  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg mb-4 ">
      {children}
    </div>
  );
};

export default Card;
