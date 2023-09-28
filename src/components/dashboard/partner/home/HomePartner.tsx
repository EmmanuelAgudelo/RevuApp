import { RiShoppingBagLine } from 'react-icons/ri';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { TbHandClick } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';
import { useStore } from 'zustand';
import { FavoriteStore, shoppingStore } from '../../../../store';
import { useEffect } from 'react';

export const HomePartner = () => {

    const { getAmountRevuSurpriseByOwner, amountRevuSurpriseByOwner } = useStore(shoppingStore);
    const { getAmountFavorite, amountFavorite } = useStore(FavoriteStore);

    useEffect(() => {
        getAmountRevuSurpriseByOwner();
        getAmountFavorite();
    }, [])

    return (
        <div className="homePartner">
            <div className="homePartner__sidebar">
                <div className='homePartner__card'>
                    <img src="/images/logos/logo-white.svg" alt="" />
                    <p><span>Revu Partner,</span> Complete Your Establishment Details</p>
                </div>
            </div>
            <div className='homePartner__cards'>
                <div className="homePartner__header">
                    <div className='homePartner__icon homePartner__icon--blue'>
                        <RiShoppingBagLine size={70} />
                    </div>
                    <div className='homePartner__description homePartner__description--blue'>
                        <p className="homePartner__text">Number of Orders</p>
                        <p className="homePartner__number">{amountRevuSurpriseByOwner}</p>
                    </div>
                </div>

                {/* <div className="homePartner__header">
                    <div className='homePartner__icon homePartner__icon--orange'>
                        <RxMagnifyingGlass size={70} />
                    </div>
                    <div className='homePartner__description homePartner__description--orange'>
                        <p className="homePartner__text">Searches for Your Establishment</p>
                        <p className="homePartner__number">0</p>
                    </div>
                </div>

                <div className="homePartner__header">
                    <div className='homePartner__icon homePartner__icon--blue'>
                        <TbHandClick size={70} />
                    </div>
                    <div className='homePartner__description homePartner__description--blue'>
                        <p className="homePartner__text">Clicks on Your Establishment</p>
                        <p className="homePartner__number">0</p>
                    </div>
                </div> */}

                <div className="homePartner__header">
                    <div className='homePartner__icon homePartner__icon--orange'>
                        <AiOutlineHeart size={70} />
                    </div>
                    <div className='homePartner__description homePartner__description--orange'>
                        <p className="homePartner__text">Saved as Favorite</p>
                        <p className="homePartner__number">{amountFavorite}</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
