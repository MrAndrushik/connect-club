import React from "react";
import SampleSlider from "./SampleSlider";

const Team = () => {
    const team = [
        {
            imgSrc: "img/igormonakhov.png",
            name: "@igormonakhov ",
            role: "Founder Connect.Club, ExFounder Embria, Angel Investor in Splitmetrics, Loona, Locals, Random Coffee, Voices",
        },
        {
            imgSrc: "img/fffilimonov.png",
            name: "@fffilimonov  ",
            role: "Cofounder/ Chief Technology Officer Connect.Club",
        },
        {
            imgSrc: "img/winmary.png",
            name: "@winmary ",
            role: "Chief Operating Officer Connect.Club",
        },
        {
            imgSrc: "img/ka3na.png",
            name: "@ka3na ",
            role: "Chief Product Officer Connect.Club",
        },
        {
            imgSrc: "img/seanalimov2021.jpg",
            name: "@seanalimov2021 ",
            role: "Global Program Director",
        },
        {
            imgSrc: "img/n_kus.png",
            name: "@n_kus ",
            role: "Chief Community Manager",
        },
    ];

    return (
        <section id="team" className="team" data-aos="fade-right">
            <div className="team__container container">
                <div className="team__top">
                    <h2 className="team__title stn-title">Team</h2>
                    <p className="team__text stn-text">
                        Connect.Club is team of dedicated leaders in the digital
                        space. Fully doxxed, independent thinkers who are
                        passionate about bringing people together in an
                        increasingly complicated world.
                    </p>
                </div>
                <div className="team__wrapper">
                    <SampleSlider object={team} />
                </div>
            </div>
        </section>
    );
};

export default Team;
