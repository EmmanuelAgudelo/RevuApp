export const NetworkError = () => {
  return (
    <div className="networkError">
      <div className="networkError__info networkError__info--container">
        <div className="networkError__image">
          <img src="/images/koala-network-error.svg" className="networkError__koala" alt="koala" />
        </div>

        <div className="networkError__description">
          <p className="networkError__text">Oh no! Something is failing</p>
          <span className="networkError__span">Check your connection</span>
        </div>
      </div>
    </div>
  )
}
