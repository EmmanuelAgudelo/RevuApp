import logo_revu from "../../assets/images/revu_logo.svg";

export const Navbar = () => {
  return (
    <div>
      <div className="header">
        <nav className="nav">
          <div className="nav__logo">
            <img src={logo_revu} className="nav__revu" alt="Logo__revu" />
          </div>
          <div className="nav__links">
            <ul className="nav__items">
              <li className="nav__item">
                <a href="#" className="nav__navegation">
                  Conócenos
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__navegation">
                  ¿Cómo funciona?
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__navegation">
                  Aliados
                </a>
              </li>
              <li className="nav__item">
                <a href="#" className="nav__navegation">
                  Descarga
                </a>
              </li>
            </ul>
          </div>
          <div className="auth">
            <ul className="nav__items">
              <li className="nav__item">
                <a href="#" className="nav__navegation">
                  Ingresa
                </a>
              </li>
              <li className="nav__item">
                <a
                  href="#"
                  className="nav__navegation nav__navegation--modifier"
                >
                  Registra tu estrablecimiento
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
