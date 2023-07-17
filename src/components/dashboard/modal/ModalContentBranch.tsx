import { BsBank } from 'react-icons/bs'
import { FiMail } from 'react-icons/fi'

export const ModalContentBranch = () => {
    return (
        <div className='branch-modal'>
            <h1 className='branch-modal__title navbarAdmin__admin'><BsBank className='branch-modal__title--icon'/> Revisar documentos legales</h1>
            <div className="">
                <div className="branch-modal__conatinerTable">
                    <table className="branch-modal__table">
                        <thead>
                            <tr>
                                <th>Documento</th>
                                <th>Fecha de subida</th>
                                <th>Ver</th>
                                <th>acciones</th>
                                <th>Mensaje</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RUT</td>
                                <td>29/01/2023</td>
                                <td><a href="">Ver documento</a></td>
                                <td className="center">
                                    <label className="branch-modal__switch">
                                        <input type="checkbox" id="switch__btn" />
                                        <label htmlFor="switch__btn" title="Cambiar estado"></label>
                                    </label></td>
                                <td className="center"><FiMail className="branch-modal__icon" /></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <button className="btn btn--orange">
                Guardar cambios
            </button>
        </div>
    )
}
