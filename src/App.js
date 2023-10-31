import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Trending from "./components/Trending";
import FunFact from "./components/FunFact";
import Causes from "./components/Causes";
import Team from "./components/Team";
import Goals from "./components/Goals";
import Faq from "./components/Faq";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Minter from  './components/Minter/Minter'

function App() {
  //const [screenLoading, setScreenLoading] = useState(false);
  // useEffect(() => {
  //   setScreenLoading(true);
  //   setTimeout(() => {
  //     setScreenLoading(false);
  //   }, 1000);
  // }, []);

  return (
    <>
        <div>
          <Header />
          <div className="cs-height_80 cs-height_lg_80"></div>
          <Hero />
          <About />
          <div className="cs-height_100 cs-height_lg_70"></div>
          <Services />
          <div className="cs-height_70 cs-height_lg_45"></div>
          {/* <Trending /> */}
          <div className="cs-height_90 cs-height_lg_65"></div>
          <FunFact />
          <div className="cs-height_65 cs-height_lg_35"></div>
          <Causes />
          <div className="cs-height_70 cs-height_lg_45"></div>
          <Minter />
          {/* <Team /> */}
          <Goals />
          {/* <Faq /> */}
          <Contact />
          <div className="cs-height_100 cs-height_lg_70"></div>
          <Footer />
        </div>
     
    </>
  );
}

export default App;
