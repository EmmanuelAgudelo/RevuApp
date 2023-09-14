import { useState } from 'react'
import Modal from '../../../modal/Modal'
import { BsBank } from "react-icons/bs";
import { ModalContentBranch } from '../../../modal/ModalDocumentBranch'
import { useStore } from 'zustand'
import { branchStore, businesseStore, optionStore } from '../../../../../store'
import { BodyDetails } from './BodyDetails';


export const DetailsBranch = () => {

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const { businessesByIdUser } = useStore(businesseStore);
  const { updateBranchActive, updateBranchInactive } = useStore(branchStore);
  const { setOption, option } = useStore(optionStore);
  

  // Manejo del modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  const handleActive = (branch: string, business: string) => {
    const body = { id: business }
    updateBranchActive(body, branch);
  }

  const handleInactive = (branch: string, business: string) => {
    const body = { id: business }
    updateBranchInactive(body, branch);
  }

  return (
    <div className="headquarters">
      <div className="headquarters__header">
        <img src="https://pbs.twimg.com/profile_images/1380267041790300166/uXdEuQ_D_400x400.png" alt="" />
      </div>
      <div className="headquarters__body">
        <div className="headquarters__active">
          <span className="headquarters__body-title"><strong>{businessesByIdUser?.name}</strong></span>
          {businessesByIdUser?.branches ?
            <>
              <select name="headquarters" id="headquarters" onChange={({ target }) => setOption(target.value)}>
                <option value={''}>Branch</option>
                {businessesByIdUser.branches.map((branch, index) => (
                  <option key={index} value={branch._id}>branch {branch.number}</option>
                ))}
              </select>
            </>
            :
            <div className='headquarters__null' >
              <span style={{ marginBottom: '0' }}>You don't have any assigned branches yet</span>
            </div>
          }
        </div>
        {businessesByIdUser?.branches &&
          <BodyDetails businessesByIdUser={businessesByIdUser} />
        }
      </div>
      {option !== '' &&
        <div className="headquarters__footer">
          <button className='btn btn--blue' onClick={handleOpenModal}>
            <BsBank size={20} className='headquarters__btn--icon'  />
            <span>Legal documents</span>
          </button>
          {businessesByIdUser &&
            businessesByIdUser.branches.find((branch) => branch._id === option)?.status == 'PENDING_APPROVAL' || businessesByIdUser?.branches.find((branch) => branch._id === option)?.status == 'INACTIVE' ?
            <button className="btn btn--orange" onClick={() => handleActive(option, businessesByIdUser.id ?? '')}>
              Active
            </button>
            :
            <button className="btn btn--orange" onClick={() => handleInactive(option, businessesByIdUser?.id ?? '')}>
              Desactive
            </button>
          }

        </div>
      }
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalContentBranch />
      </Modal>
    </div >
  )
}

