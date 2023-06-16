import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const TextButton = ({ link }) => {
  return (
    <Link
      to={link}
      className="inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500 hover:underline"
    >
      <p>Read More</p>

      <HiArrowNarrowRight className="mt-1" size={25} />
    </Link>
  );
};

export default TextButton;
