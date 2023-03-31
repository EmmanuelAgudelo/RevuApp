import { useEffect } from "react";
import { setTitle } from '../../helpers';

import {Login} from "../../components";

const LoginPage = () => {
 
  useEffect(() => {
    setTitle("Revufoods - login✅");
  }, [])
  
 
  return (
    <>
      <Login/>
    </>
  )
}

export default LoginPage;