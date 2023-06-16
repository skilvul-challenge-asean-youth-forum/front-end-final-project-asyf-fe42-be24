import MainLayout from "@/layouts/main-layout";
import ContentLayout from "@/layouts/content-layout";
import Navbar from "@/components/Navbar";
import Grid from "@/layouts/content-layout/Grid";
import ArticleLates from "@/components/ArticleLates";
import TittleContainer from "@/components/TittleContainer";
import SearchField from "@/components/SearchField";
import Footer from "@/components/Footer";
import { useContext, useState } from "react";
import { Context } from "@/context/Context";
import TextButton from "@/components/Button/TextButton";

const Article = () => {
  const ctx = useContext(Context);

  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <TittleContainer>
          <h1 className="text-3xl font-bold underline underline-offset-8 decoration-[#237804] decoration-3">
            Article
          </h1>
          <SearchField />
        </TittleContainer>
        <div className="flex flex-col md:flex-row justify-between gap-x-8">
          <Grid>
            <article className="md:col-span-3">
              <img src="./ArticleHero.svg" className="w-full" alt="" />
            </article>

            {ctx.articleData.map((article) => (
              <article
                key={article.id}
                className="border-gray-400 border-2 md:text-justify md:h-52 pb-4"
              >
                <img
                  src={article.pictures}
                  className="w-full max-h-32"
                  alt="img"
                />
                <div className="p-2 flex flex-col justify-between h-full">
                  <h2>{article.title}</h2>
                  <TextButton link={`/articles/articledetails/${article.id}`} />
                </div>
              </article>
            ))}
          </Grid>
          <div>
            <ArticleLates />
          </div>
        </div>
      </ContentLayout>
      <Footer />
    </MainLayout>
  );
};

export default Article;
