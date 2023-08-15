import { FiMail } from "react-icons/fi"
import { TbPointFilled } from "react-icons/tb"
import { AiOutlineEye } from "react-icons/ai"
import { Link } from "react-router-dom"
import { ChangeEvent, useEffect } from "react"
import { useStore } from "zustand"
import { userStore } from "../../../../store/userStore"
import { toastSuccess } from "../../../../helpers"



export const PartnersAdmin = () => {

  const { findPartners, partners, updateUserState, updateUserStateResponse, reset } = useStore(userStore);

  useEffect(() => {
    findPartners()
  }, [])


  const handleChange = (id: string) => {
    updateUserState(id)
  }

  useEffect(() => {
    if (updateUserStateResponse && updateUserStateResponse.message == 'success') {
      toastSuccess('Status changed successfully.');
      findPartners();
      reset();
    }
  }, [updateUserStateResponse])

  return (
    <div className="partnersAdmin">
      <div className="partnersAdmin__conatinerTable">
        <table className="partnersAdmin__table">
          <thead>
            <tr>
              <th>Partner</th>
              <th>Email</th>
              <th>Cellphone</th>
              <th>Document</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {partners?.map(partner => (
              <tr key={partner?.id}>
                <td><span><Link to={`/dashboard/admin/partner/${partner.id}`}><AiOutlineEye className="partnersAdmin__icon" title="Detalle" /></Link><p>{partner.names} {partner.last_names}</p></span></td>
                <td>{partner.email}</td>
                <td>{partner.cellphone}</td>
                <td>{partner.document_type}.  {partner.document}</td>
                {partner.status ?
                  <td className="center"><span className="status--green">Active</span></td>
                  :
                  <td className="center"><span className="status--red">Inactive</span></td>
                }
                <td className="center">
                  <label className="partnersAdmin__switch">
                    <input type="checkbox" id={`switch__btn ${partner.id}`} onChange={() => handleChange(partner.id)} checked={partner.status} />
                    <label htmlFor={`switch__btn ${partner.id}`} title="Cambiar estado"></label>
                  </label></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
