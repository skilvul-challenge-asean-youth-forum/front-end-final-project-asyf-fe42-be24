const Grid = ({ children }) => {
  return (
    <section className="grid grid-cols-1 gap-3 overflow-hidden  md:grid-cols-3">
      {children}
    </section>
  );
};

export default Grid;
