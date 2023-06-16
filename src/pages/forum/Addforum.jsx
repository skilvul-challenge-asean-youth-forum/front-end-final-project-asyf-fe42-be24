import MainLayout from "@/layouts/main-layout";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import TextField from "@/components/TextField";
import Button from "@/components/Button/Button";
import ContentLayout from "@/layouts/content-layout";
import TittleContainer from "@/components/TittleContainer";
import { IoIosImages } from "react-icons/io";
import { useContext, useState } from "react";
import { Context } from "@/context/Context";

const Addforum = () => {
  const [thumbnail, setThumbnail] = useState(null);
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [description, setDescription] = useState("");
  const ctx = useContext(Context);
  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <TittleContainer>
          <h1 className="text-3xl font-bold underline underline-offset-8 decoration-[#237804] decoration-3">
            Add New Forum
          </h1>
        </TittleContainer>
        <p className="text-xl">
          Propose a fresh discussion topic that you care about and engage in a
          conversation about it with fellow youths from Southeast Asia.
        </p>
        <div className="flex justify-center w-full md:mt-16 mt-8">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              ctx.handlePostForum(author, title, thumbnail, description);
            }}
            className="flex flex-col gap-y-4 w-full md:w-3/5 bg-gray-300 h-80 justify-center rounded p-3"
          >
            <div>
              <TextField
                type="text"
                placeHolder="Author"
                value={author}
                className="w-full"
                onChange={(e) => setAuthor(e.target.value)}
              />
            </div>
            <div>
              <TextField
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeHolder="Forum Title"
                className="w-full"
              />
            </div>
            <div className="flex items-center">
              <input
                type="file"
                accept="image/*"
                onChange={(e) => setThumbnail(e.target.files[0])}
                className="md:w-1/2 border rounded-md border-gray-400 p-3 w-full bg-slate-50 focus:outline-slate-400"
              />
              <IoIosImages
                size={32}
                className="ml-2 opacity-50 hover:opacity-100 hover:cursor-pointer"
              />
            </div>
            <div>
              <TextField
                type="text"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeHolder="Forum Description"
                className="w-full"
              />
            </div>
            <div>
              <Button
                type="submit"
                textColor="text-white"
                bgColor="bg-[#237804]"
                name="Add forum"
              />
            </div>
          </form>
        </div>
      </ContentLayout>
      <Footer />
    </MainLayout>
  );
};

export default Addforum;
