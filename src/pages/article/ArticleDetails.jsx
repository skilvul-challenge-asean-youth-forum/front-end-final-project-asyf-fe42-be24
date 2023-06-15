import MainLayout from "@/layouts/main-layout";
import ContentLayout from "@/layouts/content-layout";
import Navbar from "@/components/Navbar";
import ArticleLates from "@/components/ArticleLates";
import Comments from "@/components/Comments";
import Footer from "@/components/Footer";
import { Fragment, useEffect } from "react";
// import { useContext } from "react";
// import { Context } from "@/context/Context";
import { useParams } from "react-router-dom";

const ArticleDetails = () => {
  const { id } = useParams();
  const url = "https://backend-service-dev.up.railway.app/news";
  // const ctx = useContext(Context);
  const getDetails = async () => {
    const response = await fetch(url + `/${id}`);
    const result = await response.json();
    console.log(result);
  };

  useEffect(() => {
    getDetails();
  }, []);

  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <div className="w-full h-full flex flex-col md:flex-row">
          {/* {ctx.articleData.map((article) => (
            <Fragment key={article.id}>
              <h1 className="text-center mb-12 font-bold text-3xl">
                {article.title}
              </h1>
              <article className="flex flex-col md:flex-row md:gap-x-8 gap-y-4">
                <div>
                  <figure>
                    <img src={article.pictures} alt="image" />
                  </figure>
                  <p className="text-justify max-w-7xl">
                    {article.content}
                    <br />
                    <small className="text-gray-500">{article.catergory}</small>
                  </p>
                </div>
              </article>
            </Fragment>
          ))} */}

          <ArticleLates />
        </div>
        <Comments />
      </ContentLayout>
      <Footer />
    </MainLayout>
  );
};

export default ArticleDetails;
