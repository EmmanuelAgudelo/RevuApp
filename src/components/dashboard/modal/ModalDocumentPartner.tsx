import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { BsBank } from 'react-icons/bs'
import { HiUpload } from 'react-icons/hi'
import { IoCloseCircleOutline } from 'react-icons/io5'

export const ModalDocumentPartner = () => {
    return (
        <div className='documentPartner'>
            <h1 className='documentPartner__title'><BsBank className='documentPartner__title--icon' /> Subir documentos legales</h1>
            <div className="">
                <div className="documentPartner__conatinerTable">
                    <table className="documentPartner__table">
                        <thead>
                            <tr>
                                <th>Documento</th>
                                <th>Descripción</th>
                                <th>Formatos permitidos</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>RUT</td>
                                <td>RUT del dueño del establecimiento.</td>
                                <td>jpeg, jpg, docx, pdf</td>
                                <td>
                                <AiOutlineEye size={20} />
                                <HiUpload size={20}/>
                                <IoCloseCircleOutline size={20} />
                                </td>
                            </tr>
                            <tr>
                                <td>Matrícula Mercantil</td>
                                <td>Requerido que esté vigente.</td>
                                <td>pdf</td>
                                <td>
                                <AiOutlineEye size={20} />
                                <HiUpload size={20}/>
                                <IoCloseCircleOutline size={20} />
                                </td>
                            </tr>
                            <tr>
                                <td>NIT</td>
                                <td>Documento de identidad del establecimiento.</td>
                                <td>pdf</td>
                                <td>
                                <AiOutlineEye size={20} />
                                <HiUpload size={20}/>
                                <IoCloseCircleOutline size={20} />
                                </td>
                            </tr>
                            <tr>
                                <td>Registro Sanitario</td>
                                <td>Permiso sanitario o notificación sanitaria de de conformidad con la Resolución 2674 de 2013 y Resolución 3168 de 2015.</td>
                                <td>pdf</td>
                                <td>
                                <AiOutlineEye size={20} />
                                <HiUpload size={20}/>
                                <IoCloseCircleOutline size={20} />
                                </td>
                            </tr>
                            <tr>
                                <td>Certificación de manipulación de alimentos</td>
                                <td>Certificado vigente y conforme con la ley.</td>
                                <td>jpeg, jpg, pdf</td>
                                <td>
                                <AiOutlineEye size={20} />
                                <HiUpload size={20}/>
                                <IoCloseCircleOutline size={20} />
                                </td>
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
