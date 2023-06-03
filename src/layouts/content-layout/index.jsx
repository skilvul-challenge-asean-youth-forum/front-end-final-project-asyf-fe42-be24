import PropTypes from "prop-types";
import { BsArrowRightShort } from "react-icons/bs";
const ContentLayout = ({ children, title, label }) => {
  return (
    <section className="w-full min-h-screen px-16 py-8">
      <div className="flex justify-between w-full mb-10">
        <h1 className="text-3xl font-bold underline underline-offset-8 decoration-[#237804] decoration-3">
          {title}
        </h1>
        <button className="text-sky-500 flex items-center text-xl">
          {label}
          <BsArrowRightShort size={25} />
        </button>
      </div>
      {children}
    </section>
  );
};

ContentLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
export default ContentLayout;
