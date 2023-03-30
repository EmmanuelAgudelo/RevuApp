import {
  FaEnvelope,
  FaAddressCard,
  FaLockOpen,
  FaHouseUser,
  FaLocationArrow,
  FaReact,
} from "react-icons/fa";
import {
  RiCellphoneFill,
} from "react-icons/ri"  ;
import {
  BsBank,BsCashCoin
} from "react-icons/bs"  ;
import {
  GoLocation,
} from "react-icons/go"  ;
import {
  BiUserCircle,
} from "react-icons/bi"  ;
import {
  GiForkKnifeSpoon,
} from "react-icons/gi"  ;
import {
  HiOutlineMail,
} from "react-icons/hi"  ;

import logo from "../../../public/images/logo_blanco.svg";

export default function RegisterComponent() {
  return (
    <div className="card">
      <div className="card__head">
        <h1 className="card__title">Bienvenido al registro Revu.</h1>
        <img src={logo} alt="" className="card__logo" />
      </div>
      <div className="card__body">
        <h2 className="card__body__title card__body__title--orange">
          Primer paso:{" "}
          <span className=" card__body__title ">Registrate como aliado</span>
        </h2>
        <form action="" className="form">
          <div className="form__group">
            <BiUserCircle className="form__icons--orange"  size={20} />
            <input type="text" name="" id="" placeholder="Nombre completo" />
          </div>
          <div className="form__group">
            <BiUserCircle className="form__icons--orange"  size={20} />

            <input type="text" name="" id="" placeholder="Apellidos" />
          </div>
          <div className="form__group">
            <HiOutlineMail className="form__icons--orange"  size={40} />
            <input
              type="email"
              name=""
              id=""
              placeholder="Correo electrónico"
            />

            <RiCellphoneFill className="form__icons--orange"  size={40} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Celular de contacto"
            />
          </div>
          <div className="form__group">
            <FaAddressCard className="form__icons--orange"  size={40} />
            <select name="" id="">
              <option value="">Tipo de documento</option>

              <option value="">Cedula de ciudadania</option>
              <option value="">Tarjeta de identidad</option>
              <option value="">Cedula de extranjeria</option>
            </select>
            <input
              type="text"
              name=""
              id=""
              placeholder="Numero de documento"
            />
          </div>
          <div className="form__group">
            <FaLockOpen className="form__icons--orange"  size={20} />
            <input type="email" name="" id="" placeholder="Contraseña" />
          </div>

          <h4 className="card__body__title card__body__title--blue">
            Segundo paso:{" "}
            <span className="card__body__title">
              Ingresa los datos de tu establecimiento
            </span>{" "}
          </h4>
          <div className="form__group">
            <BsBank className="form__icons--blue"  size={20} />
            <input type="text" name="" id="" placeholder=" Razón social" />
          </div>
          <div className="form__group">
            <GoLocation className="form__icons--blue"  size={40} />
            <input type="text" name="" id="" placeholder="Ciudad" />
            <input type="text" name="" id="" placeholder="Departamento" />
          </div>
          <div className="form__group">
            <BiUserCircle className="form__icons--blue"  size={20} />

            <input
              type="text"
              name=""
              id=""
              placeholder="Dirección principal"
            />
          </div>
          <div className="form__group">
            <GiForkKnifeSpoon className="form__icons--blue"  size={20} />
            <select name="" id="">
              <option value="">Categoria del establecimiento</option>

              <option value="">Comida</option>
              <option value="">Supermercados</option>
            </select>
          </div>
          <div className="form__group">
            <RiCellphoneFill className="form__icons--blue"  size={20} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Teléfono de contacto"
            />
          </div>
          <div className="form__group">
            <BsCashCoin className="form__icons--blue"  size={20} />
            <input
              type="text"
              name=""
              id=""
              placeholder="Información bancaria"
            />
          </div>

          <input
            type="submit"
            value="Finalizar el registro"
            className="carb__body__btn"
          />
        </form>
      </div>
    </div>
  );
}
