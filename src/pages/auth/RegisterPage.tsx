import { useEffect } from "react";
import { Register } from "../../components";
import { setTitle } from "../../helpers";



const RegisterPage = () => {

  useEffect(() => {
    setTitle("Revufoods - Register✅");
  }, [])
  
  return (
    <>  
      <Register/>
    </>
  )
}

export default RegisterPage;