import Header from "../components/common/Header";
import Footer from "../components/common/Footer";
import Catchphrase from "../components/home/Catchphrase";
import ServiceFlow from "../components/home/ServiceFlow";
import ServiceEffect from "../components/home/ServiceEffect";
import CompanyMarquee from "../components/home/CompanyMarquee";
import Guidance from "../components/home/Guidance";
import FAQ from "../components/home/FAQ";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Catchphrase />
        <CompanyMarquee />
        <ServiceFlow />
        <ServiceEffect />
        <Guidance />
        <FAQ />
      </main>
      <Footer />
    </>
  );
};

export default Home;
