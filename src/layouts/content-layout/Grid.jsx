const Grid = ({ children }) => {
  return (
    <section className="grid grid-cols-3 gap-4 overflow-hidden sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {children}
    </section>
  );
};

export default Grid;
