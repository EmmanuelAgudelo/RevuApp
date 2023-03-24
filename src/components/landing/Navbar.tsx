export const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <nav className="nav">
          <div className="logo">
            <h2>Revu foods</h2>
          </div>
          <div className="links__info">
            <ul className="links__home">
              <li className="link">
                <a href="#" className="navegation">Conócenos</a>
              </li>
              <li className="link">
                <a href="#" className="navegation">¿Cómo funciona?</a>
              </li>
              <li className="link">
                <a href="#" className="navegation">Aliados</a>
              </li>
              <li className="link">
                <a href="#" className="navegation">Descarga</a>
              </li>
            </ul>
          </div>
          <div className="auth_links">
            <ul className="auth">
              <li className="link__auth">
                <a href="#" className="navegation__auth">Ingresa</a>
              </li>
              <li className="link__auth ">
                <a href="#" className="navegation__auth navegation__auth__modify">Registra tu estrablecimiento</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};
