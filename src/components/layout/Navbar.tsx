import { useStore } from "zustand";
import { Link, NavLink } from "react-router-dom";
import { FaHamburger } from 'react-icons/fa';
import logo_revu from "/images/revu_logo.svg";
import { routes } from "../../router/routes";
import { authStore } from "../../store";
import { useEffect } from "react";


export const Navbar = () => {
  const { authentication, validateAuthentication } = useStore(authStore);

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
            <img src={logo_revu} alt="Logo revufoods" />
          </Link>
        </div>
        <div className="nav__links">
          <ul className="nav__items">
            {/* dynamic routes */}
            {routes.landing.map(({ title, path }) => (
              <li className="nav__item">
                <NavLink key={title} to={path} className={({ isActive }) => isActive ? 'nav__link nav__link--active' : 'nav__link'}>{title}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="nav__auth">
          <ul className="nav__items">
            {authentication === 'verifying' && <p>Cargando...</p>}
            
            {authentication === "unauthenticated" && <>
              <li className="nav__item">
                <Link to="/auth/login" className="nav__link">Ingresa</Link>
              </li>
              <li className="nav__item">
                <Link to="/auth/register" className="nav__link nav__link--register">Registra tu establecimiento</Link>
              </li>
            </>
            }

            {authentication !== 'verifying' && authentication !== "unauthenticated" && <li className="nav__item">
              <Link to="/dashboard/user" className="nav__link nav__link--register">Dashboard</Link>
            </li>}

          </ul>
        </div>
        <div className="nav__toogle">
          <FaHamburger className="nav__hamburger" />
        </div>
      </nav>
    </header>
  );
};
