import { RiShoppingBagLine } from 'react-icons/ri';
import { RxMagnifyingGlass } from 'react-icons/rx';
import { TbHandClick } from 'react-icons/tb';
import { AiOutlineHeart } from 'react-icons/ai';

export const HomePartner = () => {
    return (
        <div className="homePartner">
            <div className="homePartner__sidebar">
                <div className='homePartner__card'>
                    <img src="/images/logos/logo-white.svg" alt="" />
                    <p><span>Aliado Revu,</span> completa los datos de tu establecimiento</p>
                    <button className='btn btn--orange'>Haz click aquí</button>
                </div>
            </div>
            <div className='homePartner__cards'>
                <div className="homePartner__header">
                    <div className='homePartner__icon homePartner__icon--blue'>
                        <RiShoppingBagLine size={70} />
                    </div>
                    <div className='homePartner__description homePartner__description--blue'>
                        <p className="homePartner__text">Cantidad de pedidos</p>
                        <p className="homePartner__number">45</p>
                    </div>
                </div>

                <div className="homePartner__header">
                    <div className='homePartner__icon homePartner__icon--orange'>
                        <RxMagnifyingGlass size={70} />
                    </div>
                    <div className='homePartner__description homePartner__description--orange'>
                        <p className="homePartner__text">Busquedas de tu establecimiento</p>
                        <p className="homePartner__number">256</p>
                    </div>
                </div>

                <div className="homePartner__header">
                    <div className='homePartner__icon homePartner__icon--blue'>
                        <TbHandClick size={70} />
                    </div>
                    <div className='homePartner__description homePartner__description--blue'>
                        <p className="homePartner__text">Clicks en tu establecimiento</p>
                        <p className="homePartner__number">187</p>
                    </div>
                </div>

                <div className="homePartner__header">
                    <div className='homePartner__icon homePartner__icon--orange'>
                        <AiOutlineHeart size={70} />
                    </div>
                    <div className='homePartner__description homePartner__description--orange'>
                        <p className="homePartner__text">Guardado como favorito</p>
                        <p className="homePartner__number">26</p>
                    </div>
                </div>
            </div>
        </div >
    )
}
