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
import { useContext } from "react";
import { Context } from "@/context/Context";
import TextButton from "@/components/Button/TextButton";

const Home = () => {
  const ctx = useContext(Context);
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
            <Link to="/articles">See More</Link>
            <BsArrowRightShort size={25} />
          </div>
        </TittleContainer>
        <div className="flex flex-col md:flex-row justify-between gap-x-8">
          <Grid>
            <article className=" md:col-span-3">
              <img src="./ArticleHero.svg" className="w-full" alt="" />
            </article>
            {ctx.articleData.map((article) => (
              <Card
                key={article.id}
                className="border-gray-400 border-2 w-full h-96 md:text-justify md:h-52 pb-4"
              >
                <img
                  className="w-full h-48 object-cover object-center"
                  src={article.pictures}
                  alt="Card"
                />
                <div className=" flex flex-col justify-between h-[280px] px-6 py-4">
                  <div className="font-medium text-lg mb-2">
                    {article.title}
                  </div>

                  <TextButton link={`/articles/${article.id}`} />
                </div>
              </Card>
            ))}
          </Grid>
          <div>
            <ArticleLates />
          </div>
        </div>
      </ContentLayout>
      <Quote text="“The ASEAN Human Rights Declaration protects the freedom of opinion and expression of people in Southeast Asia”" />
      <ContentLayout>
        <TittleContainer>
          <h1 className="text-3xl font-bold underline underline-offset-8 decoration-[#237804] decoration-3">
            Forum
          </h1>
          <div className="flex items-center text-blue-600 text-xl font-semibold">
            <Link to="/forums">See More</Link>
            <BsArrowRightShort size={25} />
          </div>
        </TittleContainer>
        <Grid>
          {ctx.forumData.map((el) => (
            <Card key={el.id}>
              <img
                className="w-full h-48 object-cover object-center"
                src={el.picture}
                alt="Card"
              />
              <div className=" flex flex-col justify-between h-[280px] px-6 py-4">
                <div className="font-semibold text-xl mb-2">{el.title}</div>
                <div className="p-2 flex flex-col justify-between h-full">
                  <p className="text-gray-700 text-base mb-2">
                    {el.descrition}
                  </p>
                  <TextButton link={`/forums/${el.id}`} />
                </div>
              </div>
            </Card>
          ))}
        </Grid>
      </ContentLayout>
      <SocialLink />
      {/*simpan footer disini ya*/}
      <Footer />
    </MainLayout>
  );
};

export default Home;
