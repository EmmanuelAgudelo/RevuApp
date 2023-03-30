import { useEffect } from "react";
import { setTitle } from "../../helpers";

import RegisterComponent from "../../components/auth/RegisterComponent";0

const Register = () => {

  useEffect(() => {
    setTitle("Revufoods - Register✅");
  }, [])
  
  return (
<>  
<RegisterComponent/>
</>
  )
}

export default Register;