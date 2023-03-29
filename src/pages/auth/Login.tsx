import { useEffect } from "react";
import { setTitle } from '../../helpers';

import LoginComponen from "../../components/auth/LoginComponen";

const Login = () => {
 
  useEffect(() => {
    setTitle("Revufoods - login✅");
  }, [])
  
 
  return (
    <>
      <LoginComponen/>
    </>
  )
}

export default Login;