export const Figures = () => {
  return (
    <div className="figures">
        <div className="figures__container">
            <div className="figures__info">
                <p className="figures__text">Actualmente en <span className="figures__span">nuestro país</span></p>
                <h2 className="figures__bigFont figures__bigFont--orange">9.6 millones</h2>
                <p className="figures__text">de toneladas de comida <span className="figures__span">son desperdiciadas</span></p>
            </div>
            <div className="figures__info">
                <p className="figures__text"><span className="figures__span">América latina y el Caribe</span> son responsables</p>
                <h2 className="figures__bigFont figures__bigFont--blue">del 20%</h2>
                <p className="figures__text">de los alimentos que se<span className="figures__span"> desperdician en el mundo</span></p>
            </div>
            <div className="figures__info">
                <p className="figures__text">Según la ONU, entre el</p>
                <h2 className="figures__bigFont figures__bigFont--orange figures__changeColor">8% y 10%</h2>
                <p className="figures__text"><span className="figures__span">de las emisiones de gases de efecto invernadero</span> se deben al desperdicio de alimentos</p>
            </div>
        </div>
    </div>
  )
}
