import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="about">
      <div className="about__content about__content--container">
        <h1 className="about__title">
          Llegamos para hacer las cosas diferente<span className="section__title section__title--orange">.</span>
        </h1>
        <p className="about__paragraph">
          En Revu, nuestro objetivo principal es reducir el desperdicio de
          comida en Colombia. Somos una plataforma que conecta
          establecimientos con sobreproducción de comida con usuarios que la
          compran a un menor precio. Queremos revolucionar la industria
          gastronómica, <span className="about__paragraph--bold">¿podemos contar contigo?</span>
        </p>
        <div className="about__btn">
          <Link to="" className="about__btn__btn">
            Quiero comprar en Revu
          </Link>
          <Link to="/auth/register" className="about__btn__btn about__btn__btn--blue">
            Quiero vender en Revu
          </Link>
        </div>
      </div>
      <div className="about__image">

      </div>

    </section>
  );
}
