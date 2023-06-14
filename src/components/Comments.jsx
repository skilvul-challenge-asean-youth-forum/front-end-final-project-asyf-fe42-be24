const Comments = () => {
  return (
    <div className="w-full mt-8">
      <h2 className="text-2xl font-semibold mb-4 ">Leave a Comment</h2>
      <div className="flex items-center gap-x-4 ">
        <figure className="max-w-lg flex items-center flex-col gap-y-2 font-medium">
          <img
            className="rounded-full"
            src="./dummyUser.svg"
            alt="profile picture"
          />
          <figcaption>User</figcaption>
        </figure>
        <form className="flex flex-col md:w-2/5  gap-y-2">
          <textarea
            name="comment"
            placeholder="What's on Your Mind?"
            className="w-full h-28 p-2 focus:outline-gray-400"
          ></textarea>
          <button className="bg-[#237804] p-2 max-w-xs text-white font-medium text-sm rounded self-end">
            Post
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comments;
