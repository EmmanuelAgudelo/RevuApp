import { AiOutlineUsergroupAdd } from 'react-icons/ai'
import { ShoppingsChart } from '../../charts/ShoppingsChart'
import { useEffect } from 'react';
import { useStore } from 'zustand';
import { businesseStore, optionStore, shoppingStore } from '../../../../../store';

export const PartnerSalesProm = () => {

  const { businessesByIdUser } = useStore(businesseStore);
  const { getPromShopping } = useStore(shoppingStore);
  const { option } = useStore(optionStore);

  useEffect(() => {
    if (option !== '' && businessesByIdUser) {
      getPromShopping(businessesByIdUser.id, option)
    }
  }, [option])

  return (
    <div className='ratings'>
      <div className="ratings__card">
        <div className="ratings__header">
          <div className='ratings__icon ratings__icon--blue'>
            <AiOutlineUsergroupAdd size={70} />
          </div>
          <div className='ratings__description ratings__description--blue'>
            <p className="ratings__text">Revu Surprise Sold: <span>0</span></p>
          </div>
        </div>
        <div className="ratings__body">
          <ShoppingsChart />
        </div>
      </div>
    </div>
  )
}
