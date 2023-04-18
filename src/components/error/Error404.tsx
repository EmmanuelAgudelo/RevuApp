import { Link } from "react-router-dom"

export const Error404 = () => {
    return (
        <div className='error404'>
           <div className="error404__info error404__info--container">
               <div className="error404__description">
                    <p className="error404__text">¡Ops! tenemos un pequeño error aqui.</p>
                    <h1 className="error404__number">404</h1>
                    <Link to="/" className="error404__link error404__link--description">Tranqui, regresa a la pagina de inicio</Link>
               </div>

               <div className="error404__image">
                    <img src="/images/koala.svg" className="error404__koala" alt="koala" />
                    <Link to="/" className="error404__link  error404__link--image">Pagina de inicio </Link>
               </div>
           </div>
        </div>
    )
}
