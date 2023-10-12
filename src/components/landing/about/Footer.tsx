import React from 'react'
import { FaTiktok, FaInstagram, FaFacebookF, FaTwitter } from "react-icons/fa";
import { routes } from '../../../router/routes';
import { useLocation } from 'react-router-dom';
import { AiFillLinkedin } from 'react-icons/ai';

export const Footer = () => {

    const { hash } = useLocation();

    return (
        <div className="footer">
            <div className="footer__icons">
                <a href='https://instagram.com/revufoods.usa?igshid=MWZjMTM2ODFkZg==' target='__blank' className="footer__icon"><FaInstagram /></a>
                <a href='https://www.tiktok.com/@revufoods?_t=8gOjUWlDhWH&_r=1' target='__blank' className="footer__icon"><FaTiktok /></a>
                <a href='https://www.linkedin.com/company/vaco-foods/' target='__blank' className="footer__icon"><AiFillLinkedin /></a>
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
