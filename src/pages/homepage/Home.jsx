import MainLayout from "@/layouts/main-layout";
import Navbar from "@/components/Navbar";
import Jumbotron from "@/components/Jumbotron";
import Grid from "@/layouts/content-layout/Grid";
import Card from "@/components/Card";
import Quote from "@/components/Quote";
import ContentLayout from "@/layouts/content-layout";
import ArticleLates from "@/components/ArticleLates";
import SocialLink from "@/components/SocialLink";
import Footer from "@/components/Footer";
import { BsArrowRightShort } from "react-icons/bs";
import TittleContainer from "@/components/TittleContainer";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <MainLayout>
      <Navbar />
      <Jumbotron />
      <Quote text="“Freedom of opinion and expression is the fundamental human right of every individual in every corner of the world”" />
      <ContentLayout>
        <TittleContainer>
          <h1 className="text-3xl font-bold underline underline-offset-8 decoration-[#237804] decoration-3">
            Article
          </h1>
          <div className="flex items-center text-blue-600 text-xl font-semibold">
            <Link to="/article">See More</Link>
            <BsArrowRightShort size={25} />
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
          </Grid>
          <ArticleLates />
        </div>
      </ContentLayout>
      <Quote text="“The ASEAN Human Rights Declaration protects the freedom of opinion and expression of people in Southeast Asia”" />
      <ContentLayout>
        <TittleContainer>
          <h1 className="text-3xl font-bold underline underline-offset-8 decoration-[#237804] decoration-3">
            Forum
          </h1>
          <div className="flex items-center text-blue-600 text-xl font-semibold">
            <Link to="/article">See More</Link>
            <BsArrowRightShort size={25} />
          </div>
        </TittleContainer>
        <Grid>
          <Card />
          <Card />
          <Card />
        </Grid>
      </ContentLayout>
      <SocialLink />
      {/*simpan footer disini ya*/}
      <Footer />
    </MainLayout>
  );
};

export default Home;
