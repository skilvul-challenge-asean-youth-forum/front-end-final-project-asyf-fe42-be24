import MainLayout from "../../layouts/main-layout";
import ContentLayout from "../../layouts/content-layout";
import Navbar from "../../components/Navbar";
import ButtonLink from "../../components/ButtonLink";
import Footer from "../../components/Footer";
import TextField from "../../components/TextField";

const AddForum = () => {
    return (
        <MainLayout>
            <Navbar />
            <ContentLayout>
                <h1 className="flex justify-center w-full mb-10 items-center text-3xl font-bold">
                    Add New Forum
                </h1>
                <p className="text-center mb-10 w-lg text-xl">
                Propose a fresh discussion topic that you care about and engage in a conversation about it with fellow youths from Southeast Asia.
                </p>
                <form className="flex flex-col justify-center mx-72 gap-y-4 w-3/5">
                    <TextField type="text" placeHolder="Forum Topic" />
                    <TextField type="text" className="w-2" placeHolder="Forum Thumbnail"/>
                    <TextField type="textarea" placeHolder="Forum Description" />
                </form>
                <div className="flex justify-center mt-10">
                    <ButtonLink />
                </div>
            </ContentLayout>
            <Footer />
        </MainLayout>
    )
}

export default AddForum;