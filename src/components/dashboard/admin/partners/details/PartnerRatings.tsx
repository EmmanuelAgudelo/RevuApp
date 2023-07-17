import { useEffect, useState } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { RatingChart } from '../../charts/RatingChart'
import { useStore } from 'zustand';
import { businesseStore, optionStore, ratingStore } from '../../../../../store';
import { getLocalStorage } from '../../../../../localstorage';


export const PartnerRatings = () => {

  const { businessesByIdUser } = useStore(businesseStore);
  const { getPromRating} = useStore(ratingStore);
  const { option } = useStore(optionStore);

  useEffect(() => {
    if (option !== '' && option !== null && businessesByIdUser !== null) {
      getPromRating(businessesByIdUser.id, option)
    }
  }, [option])

  return (
    <div className='ratings'>
      <div className="ratings__card">
        <div className="ratings__header">
          <div className='ratings__icon ratings__icon--blue'>
            <AiOutlineStar size={70} />
          </div>
          <div className='ratings__description ratings__description--blue'>
            <p className="ratings__text">Calificaciones</p>
          </div>
        </div>
        <div className="ratings__body">
          <RatingChart />
        </div>
      </div>
    </div>
  )
}
