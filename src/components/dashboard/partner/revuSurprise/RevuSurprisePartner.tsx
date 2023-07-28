import { AiOutlinePlusCircle } from "react-icons/ai"
import { FaPlusCircle } from "react-icons/fa"
import { businesseStore } from "../../../../store";
import { useStore } from "zustand";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ModalFormRevuSurprise } from "../../modal/ModalFormRevuSurprise";
import Modal from "../../modal/Modal";
import { revuSurpriseStore } from "../../../../store/revuSurpriseStore";
import { toastSuccess } from "../../../../helpers";
import { useFormik } from "formik";
import { IRevuSurprise } from "../../../../interfaces";
import { RevuSurprise } from "../../../../schemas";
import { number } from "yup";
import { RevuSurpriseImages } from "./RevuSurpriseImages";

export const RevuSurprisePartner = () => {

  const { businessesByOwner } = useStore(businesseStore);
  const { findRevuSurprise, revuSurprise, createRevuSurpriseResponse, updateState, updateStateResponse, updateRevuSurprise, updateRevuSurpriseResponse, reset } = useStore(revuSurpriseStore)
  const { id } = useParams();
  const [isOpen, setIsOpen] = useState(false);

  const formik = useFormik<Omit<IRevuSurprise, 'id'>>({
    initialValues: {
      businesse: businessesByOwner ? businessesByOwner.id : '',
      branch: id ?? '',
      price: 0,
      amount: 0,
      description: '',
      start_pickup_time: '',
      end_pickup_time: '',
      status: false,
      revu_price: 0,
    },
    validationSchema: RevuSurprise,
    onSubmit: (data) => {
      const { status, branch, businesse, revu_price, ...data2 } = data;
      if (revuSurprise) {
        updateRevuSurprise(revuSurprise.id, data2)
      }
    },
  });
  const { price, description, amount, start_pickup_time, end_pickup_time, status, revu_price } = formik.values;


  useEffect(() => {
    if (businessesByOwner) {
      reset();
      findRevuSurprise(businessesByOwner.id, id ?? '')
    }
  }, [businessesByOwner])

  //  LLENAR FVALORES DEL FORMULARIO

  useEffect(() => {
    if (revuSurprise) {

      formik.setValues({
        price: revuSurprise.price,
        amount: revuSurprise.amount,
        description: revuSurprise.description,
        start_pickup_time: revuSurprise.start_pickup_time,
        end_pickup_time: revuSurprise.end_pickup_time,
        status: revuSurprise.status,
        revu_price: revuSurprise.revu_price
      })
    }
  }, [revuSurprise])


  //  TRAER LO DATOS

  useEffect(() => {
    if (businessesByOwner && id) {
      reset();
      findRevuSurprise(businessesByOwner.id, id)
    }
  }, [id])

  //  CREAR REVU-SORPRESA

  useEffect(() => {
    if (createRevuSurpriseResponse && createRevuSurpriseResponse.message === 'success') {
      toastSuccess('Se creó correctamente.')
      if (businessesByOwner) {
        findRevuSurprise(businessesByOwner.id, id ?? '')
      }
      reset();
      handleCloseModal();
    }
  }, [createRevuSurpriseResponse]);

  // MENSAJE LUEGO DE CAMBIAR ESTADO

  useEffect(() => {
    if (updateStateResponse && updateStateResponse.message === 'success') {
      toastSuccess('Se cambió el estado correctamente.')
      if (businessesByOwner) {
        findRevuSurprise(businessesByOwner.id, id ?? '')
      }
      reset();
    }
  }, [updateStateResponse])

  // MENSAJE LUEGO DE ACTUALIZAR LA REVU SORPRESA

  useEffect(() => {
    if (updateRevuSurpriseResponse && updateRevuSurpriseResponse.message === 'success') {
      toastSuccess('Se actualizó la revu-sorpresa correctamente.')
      if (businessesByOwner) {
        findRevuSurprise(businessesByOwner.id, id ?? '')
      }
      reset();
    }
  }, [updateRevuSurpriseResponse])

  // Manejo del modal

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <div className="revuSuprise">
      <div className="revuSuprise__header">
        <img src="https://pbs.twimg.com/profile_images/1380267041790300166/uXdEuQ_D_400x400.png" alt="" />
        <div className="revuSuprise__title">
          <span>Tu Revu Sorpresas</span>
          {businessesByOwner &&
            <p>{businessesByOwner.name}  - Sede {businessesByOwner.branches.find((branch) => branch._id === id)?.number}</p>
          }
        </div>
        {!revuSurprise &&
          <button className="btn btn--orange btn--icon" onClick={handleOpenModal}><AiOutlinePlusCircle size={20} style={{ marginRight: '1rem' }} />Crear una nueva Caja</button>
        }
      </div>
      {revuSurprise &&
        <>
          <div className="revuSuprise__body">
            <div className="revuSuprise__card">
              <form onSubmit={formik.handleSubmit}>
                <div className="revuSuprise__form">
                  <div className="revuSuprise__box--cash">
                    <div className={`revuSuprise__box--title ${status ? 'revuSuprise__box--active' : 'revuSuprise__box--inactive'}`}>
                      <span>Caja #01</span>
                      <label className="partnersAdmin__switch">
                        <input type="checkbox" id='status' checked={status} onChange={() => updateState(revuSurprise.id)} />
                        <label htmlFor='status' title="Cambiar estado"></label>
                      </label>
                    </div>
                    <div className="revuSuprise__box--cash--description">
                      <label htmlFor="">Descripción:</label>
                      <textarea
                        name="description"
                        id="description"
                        value={description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        rows={7}></textarea>
                    </div>
                    {formik.touched.description && formik.errors.description && (
                      <small className="form__error">{formik.errors.description}</small>
                    )}
                  </div>
                  <div className="revuSuprise__box">
                    <div className="revuSuprise__form-control">
                      <label htmlFor="price">Valor original:</label>
                      <input
                        style={{ marginLeft: '1.5rem' }}
                        type="number"
                        placeholder="Valor original"
                        id="price"
                        value={price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.price && formik.errors.price && (
                      <small className="form__error">{formik.errors.price}</small>
                    )}
                    <div className="revuSuprise__form-control">
                      <label htmlFor="revu-value">Valor revu:</label>
                      <input
                        style={{ marginLeft: '1.5rem' }}
                        type="number"
                        placeholder="Valor Revu"
                        id="revu_price"
                        disabled
                        value={revu_price}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.revu_price && formik.errors.revu_price && (
                      <small className="form__error">{formik.errors.revu_price}</small>
                    )}
                    <div className="revuSuprise__form-control">
                      <label htmlFor="amount">Cantidad:</label>
                      <input
                        style={{ marginLeft: '1.5rem' }}
                        type="number"
                        placeholder="Cantidad"
                        id="amount"
                        value={amount}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.amount && formik.errors.amount && (
                      <small className="form__error">{formik.errors.amount}</small>
                    )}
                    <div className="revuSuprise__form-control">
                      <label htmlFor="start_pickup_time">Horario de recogida:</label>
                      <input
                        style={{ marginLeft: '1.5rem' }}
                        type="time"
                        placeholder=""
                        id="start_pickup_time"
                        value={start_pickup_time}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.start_pickup_time && formik.errors.start_pickup_time && (
                      <small className="form__error">{formik.errors.start_pickup_time}</small>
                    )}
                    <div className="revuSuprise__form-control">
                      <label htmlFor="end_pickup_time">Horario de entrega:</label>
                      <input
                        style={{ marginLeft: '1.5rem' }}
                        type="time"
                        placeholder=""
                        id="end_pickup_time"
                        value={end_pickup_time}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                      />
                    </div>
                    {formik.touched.end_pickup_time && formik.errors.end_pickup_time && (
                      <small className="form__error">{formik.errors.end_pickup_time}</small>
                    )}
                  </div>
                </div>
                <div className="revuSuprise__btn">
                  <button type="submit" className="btn btn--blue">Guardar cambios</button>
                </div>
              </form>
            </div>
            <RevuSurpriseImages id={revuSurprise.id} />
          </div>
          <div className="revuSuprise__buttons">
            {status ?
              <button className="btn btn--outline" onClick={() => updateState(revuSurprise.id)}>Desactivar Caja</button>
              :
              <button className="btn btn--outline" onClick={() => updateState(revuSurprise.id)}>Activar Caja</button>
            }
          </div>
        </>
      }
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalFormRevuSurprise />
      </Modal>
      <hr style={{marginBottom: '2rem', color: 'gray'}} />
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
           <tr>

           </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
