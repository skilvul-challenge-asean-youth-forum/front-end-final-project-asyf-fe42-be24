import React from "react";
import MainLayout from "../../layouts/main-layout";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import ButtonLink from "../../components/ButtonLink";
import Grid from "../../layouts/content-layout/Grid";
import Card from "../../components/Card";
import Button from "../../components/Button";

const Forum = () => {
  return (
    <MainLayout>
      <Navbar />
      <header className="flex justify-between items-center bg-gray-200 m-10">
        <h1 className="text-3xl font-bold underline underline-offset-8 decoration-[#237804] decoration-3">
          Forums
        </h1>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Search"
            className="w-80 p-2 mr-4 border border-gray-300 rounded"
          />
          <ButtonLink />
        </div>
      </header>
      <Grid>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </Grid>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4 mt-4 mb-8">
        <Button name="Load More" />
      </div>
      <Footer />
    </MainLayout>
  );
};

export default Forum;
