import { useEffect, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiMobile } from 'react-icons/bi'
import Modal from '../../../modal/Modal'
import { BsBank } from "react-icons/bs";
import { ModalContentBranch } from '../../../modal/ModalContentBranch'
import { useStore } from 'zustand'
import { businesseStore, optionStore } from '../../../../../store'
import { IBranches, IBusinesseUser } from '../../../../../interfaces'
import { getLocalStorage, setLocalStorage } from '../../../../../localstorage'


export const DetailsBranch = () => {

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const { businessesByIdUser } = useStore(businesseStore);
  const { setOption } = useStore(optionStore);


  // Manejo del modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="headquarters">
      <div className="headquarters__header">
        <img src="https://pbs.twimg.com/profile_images/1380267041790300166/uXdEuQ_D_400x400.png" alt="" />
      </div>
      <div className="headquarters__body">
        <div className="headquarters__active">
          <span className="headquarters__body-title"><strong>{businessesByIdUser?.name}</strong></span>
          {businessesByIdUser?.branches &&
            <>
              <select name="headquarters" id="headquarters" onChange={({ target }) => setOption(target.value)}>
                <option value={''}>Sedes</option>
                {businessesByIdUser.branches.map((branch) => (
                  <option key={branch._id} value={branch._id}>Sede {branch.number}</option>
                ))}
              </select>
            </>
          }
        </div>
        <BodyDetails businessesByIdUser={businessesByIdUser} />
      </div>
      {businessesByIdUser?.branches ?
        <div className="headquarters__footer">
          <button className='btn btn--blue' onClick={handleOpenModal}>
            <BsBank size={20} className='headquarters__btn--icon' />
            <span>Documentos legales</span>
          </button>
          <div className="headquarters__icons">
            <AiOutlineMail size={25} />
            <BiMobile size={25} />
          </div>
          <button className="btn btn--orange">
            Desactivar establecimiento
          </button>
        </div>
        :
        ''
      }
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalContentBranch />
      </Modal>
    </div>
  )
}

interface Props {
  businessesByIdUser: IBusinesseUser | null,
}

const BodyDetails = ({ businessesByIdUser }: Props) => {

  const { option } = useStore(optionStore);
  const [branch, setBranch] = useState<IBranches | null>()

  useEffect(() => {
    setBranch(businessesByIdUser?.branches.find((branch) => branch._id === option) ?? null)
  }, [option])

  return (
    <>
      {branch ?
        <>
          <div className='headquarters__active' style={{ marginTop: '0' }}>
            {branch.status === 'PENDING_APPROVAL' ?
              <span className='status--orange'>Pendiente</span>
              : branch.status === 'INACTIVE' ?
                <span className='status--red'>Inactivo</span>
                :
                <span className='status--green'>Activo</span>
            }
          </div>
          <div className="headquarters__body-inputs">
            <input type="text" disabled value={branch.city} />
            <input type="text" disabled value={branch.department} />
            <input type="text" disabled value={branch.address} />
            <input type="text" disabled value={branch.phone} />
            <input type="text" disabled value={branch.card_number} />
          </div></>
        :
        <div className='headquarters__null'>
          <span>Selecciona una sede</span>
        </div>
      }
    </>
  )
}
