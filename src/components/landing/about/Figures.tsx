export const Figures = () => {
  return (
    <div className="figures">
        <div className="figures__container">
            <div className="figures__info">
                <img src="/images/icono_CO2.svg" alt="co2" className="figures__icon" />
                <p className="figures__text">According to the ONU, between <span className="figures__span figures__span--orange">8% and 10% </span>of greenhouse gas emissions are attributed to food waste</p>
            </div>
            <div className="figures__info figures__info--border">
                <img src="/images/icono_desperdicios-01.svg" alt="co2" className="figures__icon" />
                <p className="figures__text">Currently, in our country <span className="figures__span figures__span--blue">9.6 million</span> tons of food are wasted</p>
            </div>
            <div className="figures__info">
                <img src="/images/icono_basura-01.svg" alt="co2" className="figures__icon" />
                <p className="figures__text">Latin America and the Caribbean are responsible for <span className="figures__span figures__span--orange">20% </span>of the world's wasted food</p>
            </div>
        </div>
    </div>
  )
}
