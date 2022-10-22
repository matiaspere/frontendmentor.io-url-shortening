import React from "react";
import style from "../styles/Hero.module.scss";
import illustration from "../images/illustration-working.svg";

const Hero = () => {
  return (
    <div className={style.Hero}>
      <div className={style.HeroImage}>
        <img src={illustration} />
      </div>
      <div className={style.HeroText}>
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognition and get detailed insights on how your
          links are performing
        </p>
        <button className={style.HeroButton}>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
