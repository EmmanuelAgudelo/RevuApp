import { useEffect } from "react";
import { About, Figures, Functionality, Team, Winners } from "../../components";
import { setTitle } from "../../helpers";

const AboutPage = () => {

  useEffect(() => {
    setTitle("Revufoods - Conocemos");
  }, [])
  
  return (
    <>
      <About />
      <Functionality/>
      <Winners/>
      <Team/>
      <Figures/>
    </>
  );
};

export default AboutPage;
