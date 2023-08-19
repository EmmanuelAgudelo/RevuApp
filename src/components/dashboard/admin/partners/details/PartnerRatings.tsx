import { useEffect } from 'react'
import { AiOutlineStar } from 'react-icons/ai'
import { RatingChart } from '../../charts/RatingChart'
import { useStore } from 'zustand';
import { businesseStore, optionStore, ratingStore } from '../../../../../store';


export const PartnerRatings = () => {

  const { businessesByIdUser } = useStore(businesseStore);
  const { getPromRating} = useStore(ratingStore);
  const { option } = useStore(optionStore);

  useEffect(() => {
    if (option !== '' && businessesByIdUser) {
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
            <p className="ratings__text">Ratings</p>
          </div>
        </div>
        <div className="ratings__body">
          <RatingChart />
        </div>
      </div>
    </div>
  )
}
