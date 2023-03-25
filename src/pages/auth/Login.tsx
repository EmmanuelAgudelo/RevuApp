import { useEffect } from "react";
import { setTitle } from '../../helpers';

const Login = () => {
 
  useEffect(() => {
    setTitle("Revufoods - login✅");
  }, [])
  
 
  return (
    <h1>Login</h1>
  )
}

export default Login;