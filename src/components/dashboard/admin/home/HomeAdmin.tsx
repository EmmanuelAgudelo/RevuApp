import { AiOutlineUsergroupAdd,AiOutlineHeart } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { GoGift } from 'react-icons/go';
import { FiSmartphone } from 'react-icons/fi';

export const HomeAdmin = () => {
    return (
        <div className="homeAdmin">
            <div className="homeAdmin__card">
                <div className="homeAdmin__icon homeAdmin__icon--blue">
                    <AiOutlineUsergroupAdd size={70} color='#1FBAAC' />
                </div>
                <div className="homeAdmin__description homeAdmin__description--blue">
                    <p className="homeAdmin__text">Aliados inscritos</p>
                    <p className="homeAdmin__number">345</p>
                </div>
            </div>
            <div className="homeAdmin__card">
                <div className="homeAdmin__icon homeAdmin__icon--blue">
                    <FiUsers size={70} color='#1FBAAC' />
                </div>
                <div className="homeAdmin__description homeAdmin__description--blue">
                    <p className="homeAdmin__text">Usuarios inscritos</p>
                    <p className="homeAdmin__number">345</p>
                </div>
            </div>
            <div className="homeAdmin__card">
                <div className="homeAdmin__icon homeAdmin__icon--orange">
                    <GoGift size={70} color='#FAA002' />
                </div>
                <div className="homeAdmin__description homeAdmin__description--orange">
                    <p className="homeAdmin__text">Revu sorpresa vendidas</p>
                    <p className="homeAdmin__number">345</p>
                </div>
            </div>
            <div className="homeAdmin__card">
                <div className="homeAdmin__icon homeAdmin__icon--orange">
                    <FiSmartphone size={70} color='#FAA002' />
                </div>
                <div className="homeAdmin__description homeAdmin__description--orange">
                    <p className="homeAdmin__text">Descarga de la app</p>
                    <p className="homeAdmin__number">345</p>
                </div>
            </div>
            <div className="homeAdmin__card">
                <div className="homeAdmin__icon homeAdmin__icon--blue">
                    <AiOutlineHeart size={70} color='#1FBAAC' />
                </div>
                <div className="homeAdmin__description homeAdmin__description--blue">
                    <p className="homeAdmin__text">Calificación de la app</p>
                    <p className="homeAdmin__number">345</p>
                </div>
            </div>
        </div>
    )
}
