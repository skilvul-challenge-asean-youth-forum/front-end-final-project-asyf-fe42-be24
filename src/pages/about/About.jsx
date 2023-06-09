import MainLayout from "@/layouts/main-layout";
import Navbar from "@/components/Navbar";
import ContentLayout from "@/layouts/content-layout";
import Footer from "@/components/Footer";
import Grid from "@/layouts/content-layout/Grid";
import TittleContainer from "@/components/TittleContainer";
const About = () => {
  return (
    <MainLayout>
      <Navbar />
      <ContentLayout>
        <TittleContainer>
          <h1 className="text-3xl font-bold underline underline-offset-8 decoration-[#237804] decoration-3">
            About Us
          </h1>
        </TittleContainer>
        <p className="text-2xl mt-8 leading-10">
          The ASEAN Youth Forum (AYF) is a movement that represents and fights
          for the young people in ASEAN to voice out their concerns and
          strategies for ways to achieve a better ASEAN. AYF has been a platform
          of the youth in the ASEAN to raise their voice and claim for their
          rights for a sustainable, inclusive, people-centered, and youth-driven
          regional community. The network aims to institutionalise and establish
          its national chapters to focus the engagement on important and timely
          local issues affecting the youth, and consolidate policy proposal and
          agenda to put forward to the relevant ASEAN offices.
        </p>
        <p className="text-2xl mt-5 leading-10">
          AYF held an annual and regular solidarity meeting of youth civil
          society organisations in Southeast Asia, which is held as a parallel
          meeting to the ASEAN People’s Forum (APF)/ASEAN Civil Society
          Conference (ACSC), ASEAN Senior Officials Meeting on Youth and ASEAN
          Summit. It is a strategic avenue to engage with ASEAN member states
          and mechanisms. It is also a venue to discuss the issues and concerns
          of young people in ASEAN and how to address them.
        </p>
        <p className="text-2xl mt-5 leading-10">
          AYF has been working at the local, national and regional level. In the
          last ten years, AYF has been organised in Thailand (2009), Vietnam
          (2010), Indonesia (2011), Cambodia (2012), Brunei Darussalam (2013),
          Myanmar (2014), Malaysia (2015), Cambodia (2016), The Philippines
          (2017), and Indonesia (2019). It has already involved more than 2500
          young leaders of Southeast Asia.
        </p>
        <Grid>
          <img
            className="mt-8 mb-8 rounded"
            src="https://aseanyouthforum.org/wp-content/uploads/2019/03/DSC_0215AYF-scaled.jpg"
          ></img>
          <img
            className="mt-8 mb-8 rounded"
            src="https://aseanyouthforum.org/wp-content/uploads/2019/03/DSC_0040AYF.jpg"
          ></img>
          <img
            className="mt-8 mb-8 rounded"
            src="https://aseanyouthforum.org/wp-content/uploads/2019/03/DSC_0254AYF-scaled.jpg"
          ></img>
        </Grid>
      </ContentLayout>
      <Footer />
    </MainLayout>
  );
};

export default About;
