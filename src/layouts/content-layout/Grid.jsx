const Grid = ({ children }) => {
  return (
    <section className="grid grid-cols-3 gap-4 overflow-hidden">
      {children}
    </section>
  );
};

export default Grid;
