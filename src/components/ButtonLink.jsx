const ButtonLink = () => {
  return (
    <button className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-[#389E0D] hover:bg-green-600 focus:ring-4 alig">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-5 w-5 mr-2"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm0-7a1 1 0 011 1v-3h3a1 1 0 010 2h-3v3a1 1 0 01-2 0v-3H6a1 1 0 010-2h3v-3a1 1 0 012 0v3z"
          clipRule="evenodd"
        />
      </svg>
      Add Forum
    </button>
  );
};

export default ButtonLink;
