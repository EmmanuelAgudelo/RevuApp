import { AiOutlineInfoCircle, AiOutlinePlusCircle } from "react-icons/ai"
import { businesseStore } from "../../../../store";
import { useStore } from "zustand";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { ModalFormRevuSurprise } from "../../modal/ModalFormRevuSurprise";
import Modal from "../../modal/Modal";
import { revuSurpriseStore } from "../../../../store/revuSurpriseStore";
import { calculateRevuPrice, formatMoney, toastSuccess } from "../../../../helpers";
import { useFormik } from "formik";
import { IRevuSurprise } from "../../../../interfaces";
import { RevuSurprise } from "../../../../schemas";
import { RevuSurpriseImages } from "./RevuSurpriseImages";
import { TableRevuSurprise } from "./TableRevuSurprise";

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
      toastSuccess('Created successfully.')
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
      toastSuccess('State changed successfully.')
      if (businessesByOwner) {
        findRevuSurprise(businessesByOwner.id, id ?? '')
      }
      reset();
    }
  }, [updateStateResponse])

  // MENSAJE LUEGO DE ACTUALIZAR LA REVU SORPRESA

  useEffect(() => {
    if (updateRevuSurpriseResponse && updateRevuSurpriseResponse.message === 'success') {
      toastSuccess('Revu Surprise updated successfully.')
      if (businessesByOwner) {
        findRevuSurprise(businessesByOwner.id, id ?? '')
      }
      reset();
    }
  }, [updateRevuSurpriseResponse])

  useEffect(() => {
    if (price) {
      formik.setFieldValue('revu_price', calculateRevuPrice(price))
    }
  }, [price])

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
        <img src={businessesByOwner?.logo.url?? '/images/no_image.jpg'} alt="" />
        <div className="revuSuprise__title">
           <span>Your Revu Surprise</span>
          {businessesByOwner &&
            <p>{businessesByOwner.name}  - Branch {businessesByOwner.branches.find((branch) => branch._id === id)?.number}</p>
          }
        </div>
        {!revuSurprise &&
          <button className="btn btn--orange btn--icon" onClick={handleOpenModal}><AiOutlinePlusCircle size={20} style={{ marginRight: '1rem' }} />Create a New Box</button>
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
                      <span> Box #01</span>
                      <label className="partnersAdmin__switch">
                        <input type="checkbox" id='status' checked={status} onChange={() => updateState(revuSurprise.id)} />
                        <label htmlFor='status' title="Change status"></label>
                      </label>
                    </div>
                    <div className="revuSuprise__box--cash--description">
                      <label htmlFor="">Description:</label>
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
                      <label htmlFor="price">Original Value:</label>
                      <input
                        style={{ marginLeft: '1.5rem' }}
                        type="number"
                        placeholder="Original Value"
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
                      <label htmlFor="revu-value">Revu Value:</label>
                      <input
                        style={{ marginLeft: '1.5rem' }}
                        type="text"
                        placeholder="Revu Value"
                        id="revu_price"
                        readOnly
                        value={formatMoney(revu_price ?? 0)}
                      />
                      <a className="revuSuprise__tooltip">
                        <AiOutlineInfoCircle className="icon" />
                        <span className="revuSuprise__tooltip-box">This will be the selling price of the revu surprise. </span>
                      </a>
                    </div>
                    <div className="revuSuprise__form-control">
                      <label htmlFor="amount">Amount:</label>
                      <input
                        style={{ marginLeft: '1.5rem' }}
                        type="number"
                        placeholder="Amount"
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
                      <label htmlFor="start_pickup_time">Start pickup time:</label>
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
                      <label htmlFor="end_pickup_time">End pickup time:</label>
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
                  <button type="submit" className="btn btn--blue">Save changes</button>
                </div>
              </form>
            </div>
            <RevuSurpriseImages id={revuSurprise.id} />
          </div>
          <div className="revuSuprise__buttons">
            {status ?
              <button className="btn btn--outline" onClick={() => updateState(revuSurprise.id)}>Desactivate Caja</button>
              :
              <button className="btn btn--outline" onClick={() => updateState(revuSurprise.id)}>Activate Caja</button>
            }
          </div>
        </>
      }
      <Modal isOpen={isOpen} onClose={handleCloseModal}>
        <ModalFormRevuSurprise />
      </Modal>
      <hr style={{ marginBottom: '2rem', color: 'gray' }} />
      {revuSurprise &&
        <TableRevuSurprise revuId={revuSurprise?.id} />
      }
    </div>
  )
}
