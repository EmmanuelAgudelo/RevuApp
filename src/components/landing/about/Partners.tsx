import { Link } from "react-router-dom"

export const Partners = () => {
    return (
        <section className="partners" id="partners">
            <div className="partners__container">
                <div className="partners__content">
                    <h3 className="partners__title">Our  <span className="partners__title--span">Revu </span> partners</h3>
                    <p className="partners__description">We have partnered with the Colombian Association of the Culinary Industry. Additionally, we are in dialogue with Hotel de la Ópera, Dunkin' Donuts, Grupo Éxito, Mr. Lee, Mr. Ribs, Cotelco, among others.</p>
                </div>
                <div className="partners__companies">
                    <div className="partners__image">
                        <img className="partners__logo" src="/images/icono_koala.png" alt="logo acodres" />
                    </div>
                    <div className="partners__link">
                        <Link to={'/auth/register'} className="partners__button partners__button--orange">Join us as an establishmen</Link>
                        <Link to={'/questions'} className="partners__button partners__button--white">Learn how it works</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
