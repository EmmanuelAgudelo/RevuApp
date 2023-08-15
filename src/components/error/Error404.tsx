import { Link } from "react-router-dom"

export const Error404 = () => {
    return (
        <div className='error404'>
            <div className="error404__info error404__info--container">
                <div className="error404__description">
                    <p className="error404__text">Oops! We have a little error here.</p>
                    <h1 className="error404__number">404</h1>
                    <Link to="/" className="error404__link error404__link--description">No worries, return to the homepage.</Link>
                </div>

                <div className="error404__image">
                    <img src="/images/koala.svg" className="error404__koala" alt="koala" />
                    <Link to="/" className="error404__link  error404__link--image">Homepage </Link>
                </div>
            </div>
        </div>
    )
}
