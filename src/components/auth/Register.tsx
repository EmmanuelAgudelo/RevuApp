import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useStore } from "zustand";
import { toastError, toastSuccess } from "../../helpers";
import { registerStore } from "../../store";
import { FormRegister } from "./FormRegister";
import logo from "/images/logos/logo-white.svg";


export const Register = () => {
  const {registerResponse,error,reset} = useStore(registerStore);
  const navigate = useNavigate();

  useEffect(() => {
    if(registerResponse && registerResponse.message === "success"){
      toastSuccess('Registration successful');
      reset();
      setTimeout(()=>{
        navigate('/auth/login');
      },3000);
    }
  }, [registerResponse])

  useEffect(() => {
    if (error == "email_already_exists") {
      toastError('The email is already registered'); 
    }
    if (error == "document_already_exists") {
      toastError('The ID is already registered'); 
    }
    if (error == "server_error") {
      toastError('ServerError'); 
    }
    reset();
  }, [error])
  
  
  return (
    <div className="container--auth">
      <div className="register register--container">
        <div className="register__head">
          <h1 className="register__title">Welcome to Revu registration.</h1>
          <img src={logo} alt="" className="register__logo" />
        </div>
        <div className="register__body">
          <h2 className="register__body__title register__body__title--orange">
            First step:{" "}
            <span className="register__body__title ">"Sign up as an partner</span>
          </h2>
          <FormRegister/>
        </div>
      </div>
    </div>
  );
};
