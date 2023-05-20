import { FiMail } from "react-icons/fi"
import { TbPointFilled } from "react-icons/tb"
import { AiOutlineEye } from "react-icons/ai"
import { BiUserCheck,BiUserX } from "react-icons/bi"

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
              <td>Jose julian jacome martinez</td>
              <td>josejuliandlf@gmail.com</td>
              <td>3108278836</td>
              <td>1007338492</td>
              <td><TbPointFilled color="red"/> Inactivo</td>
              <td className="center"><BiUserCheck className="partnersAdmin__icon"/> <AiOutlineEye  className="partnersAdmin__icon" title="Detalle"/></td>
              <td className="center"><FiMail className="partnersAdmin__icon"/></td>
            </tr>
            <tr>
              <td>Jacome martinez jose julian</td>
              <td>jose@gmail.com</td>
              <td>3108278836</td>
              <td>1007338492</td>
              <td><TbPointFilled color="#60E500"/> Activo</td>
              <td className="center"><BiUserX className="partnersAdmin__icon"/> <AiOutlineEye  className="partnersAdmin__icon" title="Detalle"/></td>
              <td className="center"><FiMail className="partnersAdmin__icon"/></td>
            </tr>
            <tr>
              <td>Jose julian jacome martinez</td>
              <td>josejuliandlf@gmail.com</td>
              <td>3108278836</td>
              <td>1007338492</td>
              <td><TbPointFilled color="red"/> Inactivo</td>
              <td className="center"><BiUserCheck className="partnersAdmin__icon"/> <AiOutlineEye  className="partnersAdmin__icon" title="Detalle"/></td>
              <td className="center"><FiMail className="partnersAdmin__icon"/></td>
            </tr>
            <tr>
              <td>Jacome martinez jose julian</td>
              <td>jose@gmail.com</td>
              <td>3108278836</td>
              <td>1007338492</td>
              <td><TbPointFilled color="#60E500"/> Activo</td>
              <td className="center"><BiUserX className="partnersAdmin__icon"/> <AiOutlineEye  className="partnersAdmin__icon" title="Detalle"/></td>
              <td className="center"><FiMail className="partnersAdmin__icon"/></td>
            </tr>
            <tr>
              <td>Jose julian jacome martinez</td>
              <td>josejuliandlf@gmail.com</td>
              <td>3108278836</td>
              <td>1007338492</td>
              <td><TbPointFilled color="red"/> Inactivo</td>
              <td className="center"><BiUserCheck className="partnersAdmin__icon"/> <AiOutlineEye  className="partnersAdmin__icon" title="Detalle"/></td>
              <td className="center"><FiMail className="partnersAdmin__icon"/></td>
            </tr>
            <tr>
              <td>Jacome martinez jose julian</td>
              <td>jose@gmail.com</td>
              <td>3108278836</td>
              <td>1007338492</td>
              <td><TbPointFilled color="#60E500"/> Activo</td>
              <td className="center"><BiUserX className="partnersAdmin__icon"/> <AiOutlineEye  className="partnersAdmin__icon" title="Detalle"/></td>
              <td className="center"><FiMail className="partnersAdmin__icon"/></td>
            </tr>
          </tbody>
        </table>
       </div>
    </div>
  )
}
