import React from "react";

const Card = () => {
  return (
    <div className="max-w-sm mx-auto rounded overflow-hidden shadow-lg">
      <img
        className="w-full h-48 object-cover object-center"
        src="https://aseanyouthforum.org/wp-content/uploads/2019/03/DSC_0282AYF-1024x681.jpg"
        alt="Card"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Card Title</div>
        <p className="text-gray-700 text-base mb-2">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus
          vitae, quia, nobis, officiis numquam atque aut autem esse expedita
          dolorem iure, ut doloremque repellat cupiditate dicta. Nihil, sit.
        </p>
        <a
          href="#"
          className="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline"
        >
          Read More
          <svg
            aria-hidden="true"
            className="w-5 h-5 ml-1"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
