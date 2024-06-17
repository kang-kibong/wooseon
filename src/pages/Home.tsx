import { Header, Footer } from "@components/common";
import {
  Catchphrase,
  ServiceFlow,
  ServiceEffect,
  CompanyMarquee,
  Guidance,
  FAQ,
} from "@components/home";

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
