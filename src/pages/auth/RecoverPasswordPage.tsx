import { useEffect } from "react";
import { RecoverPassword } from "../../components";
import { setTitle } from "../../helpers";


const RecoverPasswordPage = () => {
  useEffect(() => {
    setTitle("Revufoods - Recover Password");
  }, [])
  
  return (
    <>
      <RecoverPassword/>
    </>
  )
}

export default RecoverPasswordPage;