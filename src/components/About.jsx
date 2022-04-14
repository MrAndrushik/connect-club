import React from "react";
import Sphere from "./Sphere";
import Button from "./UI/button/Button";

const About = () => {
    return (
        <section id="about" className="about">
            <div className="about__container container">
                <div className="about__left" data-aos="fade-left">
                    <h2 className="about__title stn-title">About the club</h2>
                    <Sphere />
                </div>
                <div className="about__wrapper" data-aos="fade-right">
                    <p className="about__subtitle">
                        United Metaverse by Connect. Club
                    </p>
                    <div className="about__content">
                        <p className="about__text stn-text">
                            We are a community that believes in the future &
                            power of Metaverse communication. Connecting with
                            like-minded others is an essential part of
                            belonging. Connected communities are strong
                            communities
                        </p>
                        <p className="about__text stn-text">
                            At United Metaverse by Connect.Club, we contribute
                            to Metaverse Future by sharing our knowledge,
                            observations, and insights to help people &
                            businesses to develop the strategy for the
                            Metaverse. We believe in a decentralized future,
                            developing a virtual space using blockchain as a
                            foundation.
                        </p>
                        <p className="about__text stn-text">
                            Our goal is to build a decentralized Metaverse along
                            with communities that improve the ecosystem. Our
                            vision is to make the Metaverse space accessible for
                            everyone, to grow a strong Metaverse industry &
                            trusted virtual environment where members can earn,
                            learn & communicate.
                        </p>
                        <div className="about__btn-block">
                            <Button
                                link="https://connect-club.gitbook.io/white-paper/"
                                classNames="about__btn about__btn--paper"
                            >
                                White paper
                            </Button>
                            <Button
                                link="https://stage.connect.club/membership/2"
                                classNames="about__btn about__btn--mint"
                            >
                                Mint
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
