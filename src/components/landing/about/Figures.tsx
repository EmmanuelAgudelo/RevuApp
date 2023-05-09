export const Figures = () => {
  return (
    <div className="figures">
        <div className="figures__container">
            <div className="figures__info">
                <img src="/images/icono_CO2.svg" alt="co2" className="figures__icon" />
                <p className="figures__text">Según la ONU, entre el <span className="figures__span figures__span--orange">8% y 10% </span>de las emisiones de gases de efecto invernadero se deben al desperdicio de alimentos</p>
            </div>
            <div className="figures__info figures__info--border">
                <img src="/images/icono_desperdicios-01.svg" alt="co2" className="figures__icon" />
                <p className="figures__text">Actualmente en nuestro país <span className="figures__span figures__span--blue">9.6 millones</span> de toneladas de comida son desperdiciadas</p>
            </div>
            <div className="figures__info">
                <img src="/images/icono_basura-01.svg" alt="co2" className="figures__icon" />
                <p className="figures__text">América latina y el Caribe son responsables del <span className="figures__span figures__span--orange">20% de los alimentos </span>que se desperdician en el mundo</p>
            </div>
        </div>
    </div>
  )
}
