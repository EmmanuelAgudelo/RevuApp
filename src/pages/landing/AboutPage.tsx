import { useEffect } from "react";
import { About, Download, Figures, Functionality, Team, Winners } from "../../components";
import { setTitle } from "../../helpers";

const AboutPage = () => {

  useEffect(() => {
    setTitle("Revufoods - Conocemos");
  }, [])
  
  return (
    <>
    <Download/>
      <About />
      <Functionality/>
      <Winners/>
      <Team/>
      <Figures/>
    </>
  );
};

export default AboutPage;
