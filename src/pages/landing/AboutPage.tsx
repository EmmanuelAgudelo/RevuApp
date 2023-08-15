import { useEffect } from "react";
import { About, Download, Figures, Footer, Functionality, Partners, Team, Winners } from "../../components";
import { setTitle } from "../../helpers";

const AboutPage = () => {

  useEffect(() => {
    setTitle("Revufoods - About Us");
  }, [])
  
  return (
    <>
      <About />
      <Winners/>
      <Team/>
      <Figures/>
      <Functionality/>
      <Partners/>
      <Download/>
      <Footer/>
    </>
  );
};

export default AboutPage;
