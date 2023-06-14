import PropTypes from "prop-types";
const ContentLayout = ({ children }) => {
  return (
    <section className="w-full min-h-screen px-8 md:px-16 py-8">
      {children}
    </section>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContentLayout;
