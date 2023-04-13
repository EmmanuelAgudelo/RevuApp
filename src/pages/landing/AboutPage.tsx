import { useEffect } from "react";
import { About, Functionality, Winners } from "../../components";
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
    </>
  );
};

export default AboutPage;
