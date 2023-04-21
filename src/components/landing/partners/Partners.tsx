import { Link } from "react-router-dom"

export const Partners = () => {
    return (
        <section className="partners">
            <div className="partners__container">
                <div className="partners__content">
                    <h3 className="partners__title">Nuestros <span className="partners__title--span">aliados</span> Revu</h3>
                    <p className="partners__description">Nos vinculamos a la Asociación Colombiana de la Industria Gastronómica. Adicionalmente nos encontramos en diálogo con Hotel de la Ópera, Dunkin' Doughnuts, Grupo Éxito, Mr. Lee, Mr. Ribs, Cotelco, entre otros.</p>
                </div>
                <div className="partners__companies">
                    <div className="partners__image">
                        <img className="partners__logo" src="/images/acodres.png" alt="logo acodres" />
                    </div>
                    <div className="partners__link">
                        <Link to={'/auth/register'} className="partners__button partners__button--orange">Únete como establecimiento</Link>
                        <Link to={'/questions'} className="partners__button partners__button--white">Conoce cómo funciona</Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
