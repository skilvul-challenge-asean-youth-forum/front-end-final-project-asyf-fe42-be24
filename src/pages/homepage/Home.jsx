import MainLayout from "../../layouts/main-layout";
import Navbar from "../../components/Navbar";
import Jumbotron from "../../components/Jumbotron";
import Grid from "../../layouts/content-layout/Grid";
import Card from "../../components/Card";
import Quote from "../../components/Quote";
import ContentLayout from "../../layouts/content-layout";
import ArticleLates from "../../components/ArticleLates";
import SocialLink from "../../components/SocialLink";

const Home = () => {
  return (
    <MainLayout>
      <Navbar />
      <Jumbotron />
      <Quote text="“Freedom of opinion and expression is the fundamental human right of every individual in every corner of the world”" />
      <ContentLayout title="Article" label="See More">
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
          </Grid>
          <ArticleLates />
        </div>
      </ContentLayout>
      <Quote text="“The ASEAN Human Rights Declaration protects the freedom of opinion and expression of people in Southeast Asia”" />
      <ContentLayout title="Forums" label="See More">
        <Grid>
          <Card />
          <Card />
          <Card />
        </Grid>
      </ContentLayout>
      <SocialLink />
      {/*simpan footer disini ya*/}
    </MainLayout>
  );
};

export default Home;
