import image1 from "../../assets/images/foto1.svg";
import { FaApple, FaGooglePlay } from "react-icons/fa";
export const FrontPage = () => {
  return (
    <div className="container ">
      <section className="section">
        <div className="section__container__img">
          <img src={image1} alt="" className="section__img" />
        </div>
        <div className="text">
          <h2 className="text__title">Descarga Revu</h2>
          <p className="text__paragraph">
            y comienza a comer de manera sostenible
          </p>
          <div className="btn">
            <a href="" className="btn__btn ">
             <FaGooglePlay vertOriginY={100} size={20}/> Google play
            </a>
            <a href="" className="btn__btn">
              <FaApple size={20}/> App store
            </a>
            <a href="" className="btn__btn">
              AppGallery
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};
