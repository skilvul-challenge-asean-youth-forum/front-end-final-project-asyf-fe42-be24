import { useContext } from "react";
import { Context } from "@/context/Context";

const ArticleLates = () => {
  const ctx = useContext(Context);
  return (
    <aside className="flex flex-col gap-y-2 w-4/5">
      <h2 className="font-semibold text-2xl">Latest News</h2>
      {ctx.articleData.map((items) => (
        <div key={items.id}>
          <small className="text-red-500">{items.category}</small>
          <p>{items.title}</p>
          <small className="text-gray-500">{items.createdAt}</small>
        </div>
      ))}
    </aside>
  );
};

export default ArticleLates;
