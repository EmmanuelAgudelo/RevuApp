import { Link } from "react-router-dom"

export const Partners = () => {
    return (
        <section className="partners">
            <div className="partners__container">
                <div className="partners__content">
                    <h3 className="partners__title">Nuestros <span className="partners__title--span">aliados</span> Revu</h3>
                    <p className="partners__description">Somos un proyecto en constante crecimiento y cada vez son más los restaurantes, panaderías, hoteles, supermercados y fruvers que se unen a la revolución.</p>
                </div>
                <div className="partners__companies">
                    <div className="partners__slider">
                        <h3>slider</h3>
                    </div>
                    <div className="partners__link">
                        <Link to={'/'} className="partners__button partners__button--orange">Únete como establecimiento</Link>
                        <Link to={'/'} className="partners__button partners__button--white">Conoce cómo funciona</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
