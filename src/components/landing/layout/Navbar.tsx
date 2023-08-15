import { useEffect, useState } from "react";
import { useStore } from "zustand";
import { Link, NavLink, useLocation } from "react-router-dom";
import { FaHamburger } from 'react-icons/fa';
import logo from "/images/logos/logo-yellow.svg";
import { routes } from "../../../router/routes";
import { authStore } from "../../../store";


export const Navbar = () => {
  const { authentication, validateAuthentication } = useStore(authStore);
  const [showMenu, setShowMenu] = useState(false);

  const {hash} = useLocation();

  

  function toggleMenu() {
    setShowMenu(!showMenu);
  }

  useEffect(() => {
    if (authentication === 'verifying') {
      validateAuthentication();
    }
  }, [authentication])

  return (
    <header className="header">
      <nav className="nav nav--container">
        <div className="nav__logo">
          <Link to='/'>
            <img src={logo} alt="Logo revufoods" />
          </Link>
        </div>
        <div className="nav__links">
          <ul className="nav__items">
            {/* dynamic routes */}
            
            {routes.landing.map(({ title, path },i) => (
              <li className="nav__item" key={i}>
                <a  href={path} className={'/'+hash === path ? 'nav__link nav__link--active' : 'nav__link'}>{title}</a>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__auth">
          <ul className="nav__items">
            {authentication === 'verifying' && <p>Loading...</p>}

            {authentication === "unauthenticated" && <>
              <li className="nav__item">
                <Link to="/auth/login" className="nav__link">Log In</Link>
              </li>
              <li className="nav__item">
                <Link to="/auth/register" className="nav__link nav__link--register">Register Your Establishment</Link>
              </li>
            </>
            }

            {authentication !== 'verifying' && authentication !== "unauthenticated" && <li className="nav__item">
              <Link to={authentication.role == 'ADMIN' ? '/dashboard/admin/home' : '/dashboard/partner/home'} className="nav__link nav__link--register">Dashboard</Link>
            </li>}

          </ul>
        </div>
        <div className="nav__toogle">
          <FaHamburger className="nav__hamburger" onClick={toggleMenu} />
        </div>
      </nav>
      {showMenu&&   <nav className={`nav--hidden ${showMenu&&'nav--hidden-active'}`}>
        <ul className="nav__items--hidden">
          {/* dynamic routes */}
          {routes.landing.map(({ title, path },i) => (
            <li className="nav__item--hidden" key={i}>
              <a  href={path} className={'/'+hash === path ? 'nav__link nav__link--active--hidden' : 'nav__link'}>{title}</a>
            </li>
          ))}
          <div className="auth--hidden">
            {authentication === 'verifying' && <p>Loading...</p>}

            {authentication === "unauthenticated" && <>
              <li className="nav__item">
                <Link to="/auth/login" className="nav__link--hidden">Log in</Link>
              </li>
              <li className="nav__item">
                <Link to="/auth/register" className="nav__link nav__link--register">Register Your Establishment</Link>
              </li>
            </>
            }

            {authentication !== 'verifying' && authentication !== "unauthenticated" && <li className="nav__item">
              <Link to={authentication.role == 'ADMIN' ? '/dashboard/admin/home' : '/dashboard/partner/home'} className="nav__link nav__link--register">Dashboard</Link>
            </li>}
          </div>
        </ul>
      </nav>}
   
    </header>
  );
};
