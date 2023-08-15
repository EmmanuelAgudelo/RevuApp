import { useEffect, useState } from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { BiMobile } from 'react-icons/bi'
import Modal from '../../../modal/Modal'
import { BsBank } from "react-icons/bs";
import { ModalContentBranch } from '../../../modal/ModalContentBranch'
import { useStore } from 'zustand'
import { branchStore, businesseStore, optionStore } from '../../../../../store'
import { IBranches, IBusinesseUser } from '../../../../../interfaces'
import { toastSuccess } from '../../../../../helpers';
import { useParams } from 'react-router-dom';


export const DetailsBranch = () => {

  // Modal
  const [isOpen, setIsOpen] = useState(false);
  const { id } = useParams();
  const { businessesByIdUser, findBussinessesByIdUser } = useStore(businesseStore);
  const { updateBranchActive, updateBranchActiveResponse, updateBranchInactiveResponse, updateBranchInactive, reset } = useStore(branchStore);
  const { setOption, option } = useStore(optionStore);

  useEffect(() => {
    if (updateBranchActiveResponse && updateBranchActiveResponse.message === 'success') {
      toastSuccess('Branch activated successfully.');
      reset();
      findBussinessesByIdUser(id);
    }

    if (updateBranchInactiveResponse && updateBranchInactiveResponse.message === 'success') {
      toastSuccess('Branch deactivated successfully.');
      reset();
      findBussinessesByIdUser(id);
    }
  }, [updateBranchActiveResponse, updateBranchInactiveResponse])


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
            <BsBank size={20} className='headquarters__btn--icon' />
            <span>Legal documents</span>
          </button>
          <div className="headquarters__icons">
            <AiOutlineMail size={25} />
            <BiMobile size={25} />
          </div>
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
              <span className='status--orange'>Pending</span>
              : branch.status === 'INACTIVE' ?
                <span className='status--red'>Inactive</span>
                :
                <span className='status--green'>Active</span>
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
          <span>Select a branch</span>
        </div>
      }
    </>
  )
}
