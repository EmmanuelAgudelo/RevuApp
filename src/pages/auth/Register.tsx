import { useEffect } from "react";
import { setTitle } from "../../helpers";

const Register = () => {

  useEffect(() => {
    setTitle("Revufoods - Register✅");
  }, [])
  
  return (
    <div>Register</div>
  )
}

export default Register;