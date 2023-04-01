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
      toastSuccess('Registro exitoso');
      reset();
      setTimeout(()=>{
        navigate('/auth/login');
      },3000);
    }
  }, [registerResponse])

  useEffect(() => {
    if (error == "email_already_exists") {
      toastError('El correo ya esta registrado'); 
    }
    if (error == "document_already_exists") {
      toastError('El documento ya esta registrado'); 
    }
    if (error == "server_error") {
      toastError('El error en el servidor'); 
    }
    reset();
  }, [error])
  
  
  return (
    <div className="container--auth">
      <div className="register">
        <div className="register__head">
          <h1 className="register__title">Bienvenido al registro Revu.</h1>
          <img src={logo} alt="" className="register__logo" />
        </div>
        <div className="register__body">
          <h2 className="register__body__title register__body__title--orange">
            Primer paso:{" "}
            <span className="register__body__title ">Registrate como aliado</span>
          </h2>
          <FormRegister/>
        </div>
      </div>
    </div>
  );
};
