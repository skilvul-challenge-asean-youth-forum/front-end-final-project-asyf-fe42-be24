import { useContext } from "react";
import { Context } from "@/context/Context";

const ArticleLates = () => {
  const ctx = useContext(Context);
  return (
    <>
      <h2 className="font-semibold text-2xl">Latest News</h2>
      <aside className="grid grid-cols-2 md:grid-cols-1 justify-between w-full mt-4 md:mt-0 gap-y-2 md:w-4/5">
        {ctx.articleData.map((items) => (
          <div key={items.id} className="h-full flex flex-col justify-between">
            <small className="text-red-500">{items.category}</small>
            <p>{items.title}</p>
            <small className="text-gray-500">{items.createdAt}</small>
          </div>
        ))}
      </aside>
    </>
  );
};

export default ArticleLates;
