import { Header, Footer } from "../components/common";
import {
  Catchphrase,
  ServiceFlow,
  ServiceEffect,
  CompanyMarquee,
  Guidance,
  FAQ,
} from "../components/home";
import Catchphrase2 from "../components/home/Catchphrase2/Catchphrase2";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        {/* <Catchphrase /> */}
        <Catchphrase2 />
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
