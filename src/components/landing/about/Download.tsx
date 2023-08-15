import { Link } from "react-router-dom";

export const Download = () => {
  return (
    <section className="download" id="download">
      <div className="download__image">
      </div>
      <div className="download__content">
        <div className="download__text">
          <p className="download__paragraph">Are you ready</p>
          <p className="download__paragraph">to start</p>
          <h2 className="download__subtitle">the Revu experience?</h2>
        </div>
        <div className="download__buttons">
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
      </div>
    </section>
  );
};
