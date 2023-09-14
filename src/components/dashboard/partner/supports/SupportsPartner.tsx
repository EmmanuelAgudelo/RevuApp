import { useEffect, useState } from "react";
import Modal from "../../modal/Modal";
import { ModalFormSupport } from "../../modal/ModalFormSupport";
import { supportStore } from "../../../../store";
import { useStore } from "zustand";
import { formatDate, toastSuccess } from "../../../../helpers";

export const SupportsPartner = () => {

  const [isOpen, setIsOpen] = useState(false);
  const { createSupportResponse, findSupportsByCreator, supportsByCreator, reset, isLoading } = useStore(supportStore)


  useEffect(() => {
    findSupportsByCreator();
  }, [])

  useEffect(() => {
    if (createSupportResponse && createSupportResponse.message === 'success') {
      toastSuccess('Sent successfully.');
      handleCloseModal();
      reset();
    }
  }, [createSupportResponse])

  // Manejo del modal
  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };


  if (!isLoading) {
    return (
      <div className='supportsPartner'>
        <div className='supportsPartner__main'>
          <div className='supportsPartner__title'>
            <span>Supports</span>
            <button className='btn btn--dark-blue' onClick={handleOpenModal} >Send a New Message</button>
          </div>
          <div className='supportsPartner__table'>
            <table className="documentPartner__table">
              <thead>
                <tr>
                  <th>Message Sent</th>
                  <th>Answer</th>
                  <th>Answer By</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                {supportsByCreator &&
                  supportsByCreator.map((support) => (
                    <tr>
                      <td>{support.question}</td>
                      {support.is_answered ?
                        <td> {support.answer} </td>
                        :
                        <td>No Response</td>
                      }
                      <td>
                        {support.answered_by ?
                          `${support.answered_by.names} ${support.answered_by.names} `
                          :
                          'No one has responded yet'
                        }
                      </td>
                      <td>{formatDate(support.created_at)}</td>
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="supportsPartner__sidebar">
          <div className="supportsPartner__title--sidebar">
          Revu Tips
          </div>
          <div className="supportsPartner__cards">
            <div className="supportsPartner__card">
              <div className="supportsPartner__header">
                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
              <div className='supportsPartner__body'>
                <span>Analyze your audience well</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illo, similique voluptas iusto culpa eum quasi beatae earum accusantium esse nemo sunt</p>
              </div>
            </div>
            <div className="supportsPartner__card">
              <div className="supportsPartner__header">
                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
              <div className='supportsPartner__body'>
                <span>Analyze your audience well</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illo, similique voluptas iusto culpa eum quasi beatae earum accusantium esse nemo sunt</p>
              </div>
            </div>
            <div className="supportsPartner__card">
              <div className="supportsPartner__header">
                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
              <div className='supportsPartner__body'>
                <span>Analyze your audience well</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi illo, similique voluptas iusto culpa eum quasi beatae earum accusantium esse nemo sunt</p>
              </div>
            </div>
          </div>
        </div>
        <Modal isOpen={isOpen} onClose={handleCloseModal}>
          <ModalFormSupport />
        </Modal>
      </div>
    )
  }

  return (
    <>Loading...</>
  )

}
