import React from "react";

export default function LoginComponen() {
  return (
    <div className="container login">
      <form action="" className="form">
        <h1 className="form__title">¡Hola de nuevo! </h1>
        <h3 className="form__subtitle">
          Aliado Revu <span className="form__subtitle--orange ">.</span>
        </h3>
        <input type="email" placeholder=" Ingresa tu correo" />
        <input type="number"  />
        <input type="password" placeholder=" Ingresa tu contraseña" />
        <br />
        <select name="" id="">
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
          <option value="1">1</option>
        </select>
        <div className="buttons">
          <a href="" className="buttons__link">
            Olvidé mi contraseña
          </a>
          <input
            type="submit"
            value="¡Comencemos!"
            className="buttons__submit"
          />
        </div>
      </form>
      <img src="" alt="" />
    </div>
  );
}
