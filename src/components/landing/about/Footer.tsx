import React from 'react'
import { FaTiktok, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { routes } from '../../../router/routes';
import { useLocation } from 'react-router-dom';

export const Footer = () => {

    const { hash } = useLocation();

    return (
        <div className="footer">
            <div className="footer__icons">
                <div className="footer__icon"><FaInstagram /></div>
                <div className="footer__icon"><FaTiktok /></div>
                <div className="footer__icon"><FaFacebookF /></div>
                <div className="footer__icon"><FaTwitter /></div>
            </div>
            <div className="footer__menu">
                <ul>
                    {routes.landing.map(({ title, path }, i) => (
                        <li key={i}>
                            <a href={path}>{title}</a>
                        </li>
                    ))}
                </ul>

            </div>
            <div className="footer__logo">
                <img src="/images/logos/logo-white.svg" alt="" />
            </div>
        </div>
    )
}
