import { AiOutlineUsergroupAdd } from 'react-icons/ai'

export const PartnerSalesProm = () => {
  return (
    <div className='ratings'>
      <div className="ratings__card">
        <div className="ratings__header">
          <div className='ratings__icon ratings__icon--blue'>
            <AiOutlineUsergroupAdd size={70}/>
          </div>
          <div className='ratings__description ratings__description--blue'>
          <p className="ratings__text">Revu sorpresas vendidas: <span>123</span></p>
          </div>
        </div>
        <div className="ratings__body">
          {/* <RatingChart/> */}
        </div>
      </div>
    </div>
  )
}
