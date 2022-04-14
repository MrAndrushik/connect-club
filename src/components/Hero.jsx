import React from "react";
import Button from "./UI/button/Button";

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero__container container">
                <div className="hero__content">
                    <h1 className="hero__title">United Metaverse Pass</h1>
                    <p className="hero__subtitle">by Connect.Club</p>
                    <Button
                        link="https://stage.connect.club/membership/2"
                        classNames="hero__btn"
                    >
                        Mint
                    </Button>
                </div>
                <div className="hero__img-block">
                    <img
                        className="hero__img"
                        src="img/hero-img.png"
                        alt="Connect club gif"
                    />
                    <img
                        className="hero__gif"
                        src="img/4.gif"
                        alt="Connect club gif"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
