import MainLayout from "@/layouts/main-layout";
import ContentLayout from "@/layouts/content-layout";
import Navbar from "@/components/Navbar";
import Grid from "@/layouts/content-layout/Grid";
import ArticleLates from "@/components/ArticleLates";
import TittleContainer from "@/components/TittleContainer";
import SearchField from "@/components/SearchField";
import Footer from "@/components/Footer";
const Article = () => {
  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <TittleContainer>
          <h1 className="text-3xl font-bold underline underline-offset-8 decoration-[#237804] decoration-3">
            Article
          </h1>
          <div className="flex items-center">
            <SearchField />
          </div>
        </TittleContainer>
        <div className="flex justify-between gap-x-8">
          <Grid>
            <article className="col-span-3">
              <img src="./ArticleHero.svg" className="w-full" alt="" />
            </article>
            <article className="">
              <img src="./ArticleHero.svg" className="w-full" alt="" />
            </article>
            <article className="">
              <img src="./ArticleHero.svg" className="w-full" alt="" />
            </article>
            <article className="">
              <img src="./ArticleHero.svg" className="w-full" alt="" />
            </article>
            <article className="">
              <img src="./ArticleHero.svg" className="w-full" alt="" />
            </article>
            <article className="">
              <img src="./ArticleHero.svg" className="w-full" alt="" />
            </article>
            <article className="">
              <img src="./ArticleHero.svg" className="w-full" alt="" />
            </article>
            <article className="">
              <img src="./ArticleHero.svg" className="w-full" alt="" />
            </article>
            <article className="">
              <img src="./ArticleHero.svg" className="w-full" alt="" />
            </article>
            <article className="">
              <img src="./ArticleHero.svg" className="w-full" alt="" />
            </article>
          </Grid>
          <ArticleLates />
        </div>
      </ContentLayout>
      <Footer />
    </MainLayout>
  );
};

export default Article;
