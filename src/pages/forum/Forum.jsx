import MainLayout from "@/layouts/main-layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ButtonLink from "@/components/Button/ButtonLink";
import Grid from "@/layouts/content-layout/Grid";
import Card from "@/components/Card";
import Button from "@/components/Button/Button";
import SearchField from "@/components/SearchField";
import ContentLayout from "@/layouts/content-layout";
import TittleContainer from "@/components/TittleContainer";
import { useContext } from "react";
import { Context } from "@/context/Context";
import TextButton from "@/components/Button/TextButton";

const Forum = () => {
  const ctx = useContext(Context);
  console.log(ctx.forumData);
  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <TittleContainer>
          <h1 className="text-3xl font-bold underline underline-offset-8 decoration-[#237804] decoration-3">
            Forums
          </h1>
          <div className="flex flex-col md:flex-row justify-center gap-y-4 items-center gap-x-2">
            <SearchField />
            <ButtonLink />
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
        <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-4 mb-8">
          <Button
            name="Load More"
            bgColor="bg-[#237804]"
            textColor="text-white"
          />
        </div>
      </ContentLayout>
      <Footer />
    </MainLayout>
  );
};

export default Forum;
