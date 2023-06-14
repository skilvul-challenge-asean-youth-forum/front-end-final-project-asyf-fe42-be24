import MainLayout from "@/layouts/main-layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Button from "@/components/Button/Button";
import ContentLayout from "@/layouts/content-layout";
import TittleContainer from "@/components/TittleContainer";

const DetailForum = () => {
  return (
    <MainLayout>
      <Navbar />
      <div className="bg-gray-300 w-full">
        <img
          src="./DetailforumHero.png"
          alt="Forum Thumbnail"
          className="object-cover w-full h-auto"
        />
      </div>

      <ContentLayout>
        <TittleContainer>
          <h1 className="text-3xl font-bold">SEAYouth Festival 2022</h1>
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-x-2">
            <Button
              name="Join"
              bgColor="bg-[#389E0D]"
              textColor="text-white"
              type="button"
            />
          </div>
        </TittleContainer>
        <p className="text-justify font-semibold">
          SEAYouth is an online festival for Young Southeast Asians to come
          together, empower each other, and voice out their concerns about the
          issues related to the Southeast Asia region. The festival is organized
          to observe the International Youth Day (August 12) and the World
          Humanitarian Day (August 19) and consists of a series of open spaces,
          forums, workshops, and any other activities that would empower youth,
          hone their skills, and culminate solidarity for a sustainable
          rights-based, inclusive, people-centered, and youth-driven regional
          community.
        </p>
      </ContentLayout>
      <Footer />
    </MainLayout>
  );
};

export default DetailForum;
