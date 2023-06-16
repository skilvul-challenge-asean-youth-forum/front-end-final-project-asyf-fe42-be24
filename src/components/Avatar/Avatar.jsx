const Avatar = ({ profilePicture, fullname }) => {
  return (
    <div className="w-1/2 h-full">
      <figure className="flex items-center gap-x-3 text-lg font-medium">
        <img src={profilePicture} alt="" className="max-w-md max-h-12" />
        <figcaption>{fullname}</figcaption>
      </figure>
    </div>
  );
};

export default Avatar;
