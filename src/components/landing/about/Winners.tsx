import { AiOutlineUser } from "react-icons/ai";
import { FiUsers } from "react-icons/fi";
import { RiStore3Line } from "react-icons/ri";

export const Winners = () => {
  return (
    <div className="section__winners">
      <div className="section_texts">
        <h3 className="section__titlee">
          Aquí <span className="section__titlee--azul">todos</span> ganan
        </h3>
        <p className="section_paragraph">
          <span className="section_paragraph--bold">
            En Revu el más beneficiado es definitivamente el medio ambiente,{" "}
          </span>
          ya que al reducir la comida desperdiciada se da un paso más hacia la
          economía circular del país, pero también ganan:{" "}
        </p>
      </div>
      <article className="card">
        <div className="card__inner">
          <div className="card__front">
            <RiStore3Line className="card__icon" size="65" />
            <h3 className="card__title">Nuestros aliados</h3>
          </div>
          <div className="card__back">
            <p className="card__back__paragraph">
              quienes pueden recuperar hasta el 50% de las ganancias de la
              comida que se hubieradesperdiciado.
            </p>
          </div>
        </div>
      </article>
      <article className="card">
        <div className="card__inner">
          <div className="card__front">
            <AiOutlineUser className="card__icon" size="65" />
            <h3 className="card__title">Nuestros usuarios</h3>
          </div>
          <div className="card__back">
            <p className="card__back__paragraph">
              que pueden comprar en sus lugares favoritos a un 50% de descuento
              o más.
            </p>
          </div>
        </div>
      </article>
      <article className="card">
        <div className="card__inner">
          <div className="card__front">
            <FiUsers className="card__icon" size="65" />
            <h3 className="card__title">Todas las personas</h3>
          </div>
          <div className="card__back">
            <p className="card__back__paragraph">
              {" "}
              quienes tendran la oportunidad de disfrutar de diferentes
              restaurantes.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
