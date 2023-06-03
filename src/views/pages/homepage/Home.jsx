import MainLayout from "../../../layouts/main-layout";
import Navbar from "../../../components/Navbar";
import Jumbotron from "../../../components/Jumbotron";
import Card from "../../../components/Card";

const Home = () => {
  return (
    <MainLayout>
      <Navbar />
      <Jumbotron />
      <Card />
    </MainLayout>
  );
};

export default Home;
