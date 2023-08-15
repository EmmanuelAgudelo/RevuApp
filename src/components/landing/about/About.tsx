import { Link } from "react-router-dom";

export const About = () => {
  return (
    <section className="about" id="aboutMe">
      <div className="about__content about__content--container">
        <h1 className="about__title">
          We arrived to do things differently<span className="section__title section__title--orange">.</span>
        </h1>
        <p className="about__paragraph">
          Revu, our main goal is to reduce food waste in Colombia. We are a platform that connects establishments
          with food overproduction to users who buy it at a lower price. We aim to revolutionize the culinary industry.
          <span className="about__paragraph--bold"> Can we count on you?</span>
        </p>
        <div className="about__btn">
          <Link to="" className="about__btn__btn">
            I want to make a purchase on Revu
          </Link>
          <Link to="/auth/register" className="about__btn__btn about__btn__btn--blue">
            I want to sell on Revu
          </Link>
        </div>
      </div>
      <div className="about__image">

      </div>

    </section>
  );
}
