import { useEffect } from "react";
import { About, Download, Figures, Functionality, Partners, Team, Winners } from "../../components";
import { setTitle } from "../../helpers";

const AboutPage = () => {

  useEffect(() => {
    setTitle("Revufoods - Conocemos");
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
    </>
  );
};

export default AboutPage;
