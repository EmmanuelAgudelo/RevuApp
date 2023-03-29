import image from "../../assets/images/foto.svg";
export default function FrontAbout() {
  return (
    <div className="container">
      <section className="section">
        <div className="section__text">
          <h1 className="section__title">
            Llegamos para hacer las cosas diferentes<span className="section__title section__title--orange">.</span>
          </h1>
          <p className="section__paragraph">
            En Revu, nuestro objetivo principal es reducir el desperdicio de
            comida en Colombia. Somos una plataforma que conecta
            establecimientos con sobreproducción de comida con usuarios que la
            compran a un menor precio. Queremos revolucionar la industria
            gastronómica, <span className="section__paragraph--bold">¿podemos contar contigo?</span>
          </p>
          <div className="section__btn">
            <a href="" className="section__btn__btn">
              Quiero comprar en Revu
            </a>
            <a href="" className="section__btn__btn section__btn__btn--blue">
              Quiero vender en Revu
            </a>
          </div>
        </div>
        <img src={image} alt="" className="section__image"/>
      </section>
    </div>
  );
}
