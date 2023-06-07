import { FiMail } from "react-icons/fi"
import { TbPointFilled } from "react-icons/tb"
import { AiOutlineEye } from "react-icons/ai"
import { BiUserCheck, BiUserX } from "react-icons/bi"
import { Link } from "react-router-dom"

export const PartnersAdmin = () => {
  return (
    <div className="partnersAdmin">
      <div className="partnersAdmin__conatinerTable">
        <table className="partnersAdmin__table">
          <thead>
            <tr>
              <th>Aliado</th>
              <th>email</th>
              <th>Teléfono</th>
              <th>Documento</th>
              <th>Estado</th>
              <th>Acciones</th>
              <th>Contacto</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><span><Link to={'1'}><AiOutlineEye className="partnersAdmin__icon" title="Detalle" /></Link>Frisby</span></td>
              <td>josejuliandlf@gmail.com</td>
              <td>3108278836</td>
              <td>1007338492</td>
              <td><TbPointFilled color="red" /> Inactivo</td>
              <td className="center">
                <label className="partnersAdmin__switch">
                  <input type="checkbox" id="switch__btn" />
                  <label htmlFor="switch__btn" title="Cambiar estado"></label>
                </label></td>
              <td className="center"><FiMail className="partnersAdmin__icon" /></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
