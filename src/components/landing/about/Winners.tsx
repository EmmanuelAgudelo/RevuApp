import { FiUser } from "react-icons/fi";
import { FiUsers } from "react-icons/fi";
import { RiStore3Line } from "react-icons/ri";

export const Winners = () => {
  return (
    <div className="winners">
      <div className="winners__texts">
        <h3 className="winners__title">
          Here <span className="winners__title--azul">everyone</span> wins
        </h3>
        <p className="winners__paragraph">
          <span className="winners__paragraph--bold">
            At Revu, the biggest beneficiary is undoubtedly the environment,{" "}
          </span>
          as reducing wasted food takes us another step closer to the circular economy of the country. But there are also winners:{" "}
        </p>
      </div>
      <article className="card">
        <div className="card__inner">
          <div className="card__front card__front--glasses">
            <RiStore3Line className="card__icon" size="65" />
            <h3 className="card__title">Our partners</h3>
          </div>
          <div className="card__back">
            <p className="card__back__paragraph">
              Who can recover up to 50% of the profits from the food that would have been wasted.
            </p>
          </div>
        </div>
      </article>
      <article className="card">
        <div className="card__inner">
          <div className="card__front  card__front--eating">
            <FiUser className="card__icon" size="65" />
            <h3 className="card__title">Our users</h3>
          </div>
          <div className="card__back">
            <p className="card__back__paragraph">
              Who can purchase at their favorite places with a 50% discount or more.
            </p>
          </div>
        </div>
      </article>
      <article className="card">
        <div className="card__inner">
          <div className="card__front  card__front--food">
            <FiUsers className="card__icon" size="65" />
            <h3 className="card__title">Everyone</h3>
          </div>
          <div className="card__back">
            <p className="card__back__paragraph">
              {" "}
              Who will have the opportunity to enjoy various restaurants.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
};
