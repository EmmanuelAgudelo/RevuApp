import { Link } from "react-router-dom";
import logo_revu from "../../assets/images/revu_logo.svg";
import { routes } from "../../router/routes";

export const Navbar = () => {
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
            {routes.landing.map(({title,path})=>(
              <li className="nav__item">
               <Link to={path} className="nav__link">{title}</Link>
             </li>
            ))} 
          </ul>
        </div>
        <div className="auth">
          <ul className="nav__items">
            <li className="nav__item">
              <Link to="/auth/login" className="nav__link">Ingresa</Link>
            </li>
            <li className="nav__item">
              <Link to="/auth/register" className="nav__link nav__link--register">Registra tu establecimiento</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
