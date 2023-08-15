import { AiOutlineUsergroupAdd, AiOutlineHeart } from 'react-icons/ai';
import { FiUsers } from 'react-icons/fi';
import { GoGift } from 'react-icons/go';
import { FiSmartphone } from 'react-icons/fi';
import { useStore } from 'zustand';
import { userStore } from '../../../../store/userStore';
import { useEffect, useState } from 'react';

export const HomeAdmin = () => {

    const { numberOfUsers, numberOfPartners, getnumberOfUsers, getnumberOfPartners} = useStore(userStore)

    useEffect(() => {
        getnumberOfPartners()
        getnumberOfUsers()
    }, [])

    return (
        <div className="homeAdmin">
            <div className="homeAdmin__card">
                <div className="homeAdmin__icon homeAdmin__icon--blue">
                    <AiOutlineUsergroupAdd size={70} color='#1FBAAC' />
                </div>
                <div className="homeAdmin__description homeAdmin__description--blue">
                    <p className="homeAdmin__text">Enrolled Partners</p>
                    <p className="homeAdmin__number">{numberOfPartners}</p>
                </div>
            </div>
            <div className="homeAdmin__card">
                <div className="homeAdmin__icon homeAdmin__icon--blue">
                    <FiUsers size={70} color='#1FBAAC' />
                </div>
                <div className="homeAdmin__description homeAdmin__description--blue">
                    <p className="homeAdmin__text">Enrolled Users</p>
                    <p className="homeAdmin__number">{numberOfUsers}</p>
                </div>
            </div>
            <div className="homeAdmin__card">
                <div className="homeAdmin__icon homeAdmin__icon--orange">
                    <GoGift size={70} color='#FAA002' />
                </div>
                <div className="homeAdmin__description homeAdmin__description--orange">
                    <p className="homeAdmin__text">Revu Surprise Sold</p>
                    <p className="homeAdmin__number">0</p>
                </div>
            </div>
            <div className="homeAdmin__card">
                <div className="homeAdmin__icon homeAdmin__icon--orange">
                    <FiSmartphone size={70} color='#FAA002' />
                </div>
                <div className="homeAdmin__description homeAdmin__description--orange">
                    <p className="homeAdmin__text">App Downloads</p>
                    <p className="homeAdmin__number">0</p>
                </div>
            </div>
            <div className="homeAdmin__card">
                <div className="homeAdmin__icon homeAdmin__icon--blue">
                    <AiOutlineHeart size={70} color='#1FBAAC' />
                </div>
                <div className="homeAdmin__description homeAdmin__description--blue">
                    <p className="homeAdmin__text">App Rating</p>
                    <p className="homeAdmin__number">0</p>
                </div>
            </div>
        </div>
    )
}
