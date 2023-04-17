import { Link } from "react-router-dom";

export const Download = () => {
  return (
    <section className="download">
      <div className="download__image">
        <div className="download__title--container">
          <h1 className="download__title">
            Haz parte de la{" "}
            <span className="download__title--span">revolucion</span> de la
            comida
          </h1>
        </div>
      </div>
      <div className="download__content">
        <h2 className="download__subtitle">Descarga Revu</h2>
        <p className="download__paragraph">y comienza a comer</p>
        <p className="download__paragraph">de manera sostenible</p>
        <Link to="#" className="download__button">
          <img
            src="/images/buttons/google.png"
            alt="gooogle play"
            className="download__network"
          />
        </Link>
        <Link to="#" className="download__button">
          <img
            src="/images/buttons/apple.png"
            alt="apple store"
            className="download__network"
          />
        </Link>
        <Link to="#" className="download__button">
          <img
            src="/images/buttons/huawei.png"
            alt="App galery"
            className="download__network"
          />
        </Link>
      </div>
    </section>
  );
};
