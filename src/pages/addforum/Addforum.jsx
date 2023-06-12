import MainLayout from "@/layouts/main-layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextField from "@/components/TextField";
import ButtonLink from "@/components/Button/ButtonLink";
import ContentLayout from "@/layouts/content-layout";
import TittleContainer from "@/components/TittleContainer";
import { IoIosImages } from "react-icons/io";

const Addforum = () => {
  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <TittleContainer>
          <h1 className="text-3xl font-bold underline underline-offset-8 decoration-[#237804] decoration-3">Add New Forum</h1>
        </TittleContainer>
        <p className="text-xl">Propose a fresh discussion topic that you care about and engage in a conversation about it with fellow youths from Southeast Asia.</p>
        <div className="flex justify-start w-full mt-16">
          <div className="flex flex-col gap-y-4 w-4/5">
            <div>
              <TextField type="text" placeHolder="Forum Title" className="w-full" />
            </div>
            <div className="flex items-center">
              <input type="text" placeholder="Forum Thumbnail" className="w-3/5 border rounded-md border-gray-400 p-3 h-10 bg-slate-50 focus:outline-slate-400" />
              <IoIosImages size={32} className="ml-2 opacity-50 hover:opacity-100 hover:cursor-pointer" />
            </div>
            <div>
              <TextField placeHolder="Forum Description" className="w-full"></TextField>
            </div>
            <ButtonLink className="w-32 mx-0 mt-8" />
          </div>
        </div>
      </ContentLayout>
      <Footer />
    </MainLayout>
  );
};

export default Addforum;
