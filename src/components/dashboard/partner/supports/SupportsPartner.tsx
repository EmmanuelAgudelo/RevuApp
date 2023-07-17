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
      toastSuccess('Se envió correctamente.');
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
            <span>Soportes</span>
            <button className='btn btn--dark-blue' onClick={handleOpenModal} >Enviar un nuevo mensaje</button>
          </div>
          <div className='supportsPartner__table'>
            <table className="documentPartner__table">
              <thead>
                <tr>
                  <th>Fecha</th>
                  <th>Mensaje enviado</th>
                  <th>Respuesta</th>
                </tr>
              </thead>
              <tbody>
                {supportsByCreator &&
                  supportsByCreator.map((support) => (
                    <tr>
                      <td>{formatDate(support.created_at)}</td>
                      <td>{support.question}</td>
                      {support.is_answered ?
                        <td> {support.answer} </td>
                        :
                        <td>Sin respuesta</td>
                      }
                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
        <div className="supportsPartner__sidebar">
          <div className="supportsPartner__title--sidebar">
            Consejos Revu
          </div>
          <div className="supportsPartner__cards">
            <div className="supportsPartner__card">
              <div className="supportsPartner__header">
                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
              <div className='supportsPartner__body'>
                <span>Analiza bien a tu público</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi sed eveniet</p>
              </div>
            </div>
            <div className="supportsPartner__card">
              <div className="supportsPartner__header">
                <img src="https://images.unsplash.com/photo-1533777857889-4be7c70b33f7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" alt="" />
              </div>
              <div className='supportsPartner__body'>
                <span>Analiza bien a tu público</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel sequi sed eveniet</p>
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

  return(
    <>Cargando...</>
  )

}
