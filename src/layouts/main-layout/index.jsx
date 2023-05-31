import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return <main className="w-full min-h-screen bg-gray-400">{children}</main>;
};
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default MainLayout;
