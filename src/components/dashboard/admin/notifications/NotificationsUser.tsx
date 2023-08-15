export const NotificationsUser = () => {
  return (
    <div className="notifications">
      <div className="partnersAdmin__conatinerTable">
        <table className="partnersAdmin__table">
          <thead className="partnersAdmin__table--orange">
            <tr>
              <th>Type</th>
              <th>Message</th>
              <th>Description</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {/* {partners?.map(partner => (
              <tr key={partner?.id}>
                <td><span><Link to={`/dashboard/admin/partner/${partner.id}`}><AiOutlineEye className="partnersAdmin__icon" title="Detalle" /></Link><p>{partner.names} {partner.last_names}</p></span></td>
                <td>{partner.email}</td>
                <td>{partner.cellphone}</td>
                <td>{partner.document}</td>
                {partner.status ?
                  <td className="status--green"> Activo</td>
                  :
                  <td className="status--red  ">Inactivo</td>
                }
                <td className="center">
                  <label className="partnersAdmin__switch">
                    <input type="checkbox" id={`switch__btn ${partner.id}`} onChange={() => handleChange(partner.id)} checked={partner.status} />
                    <label htmlFor={`switch__btn ${partner.id}`} title="Cambiar estado"></label>
                  </label></td>
                <td className="center"><FiMail className="partnersAdmin__icon" /></td>
              </tr>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
  )
}
