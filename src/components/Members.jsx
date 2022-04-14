import React from "react";
import SampleSlider from "./SampleSlider";

const Members = () => {
    const members = [
        {
            imgSrc: "img/members1.png",
            name: "Olivier Moingeon",
            role: "Co-founder of Exclusible",
        },
        {
            imgSrc: "img/members2.png",
            name: "Hrish Lotlikar",
            role: "Co-Founder & CEO at SuperWorld",
        },
        {
            imgSrc: "img/members3.png",
            name: "Nicole Sales",
            role: "Business Director, Digital Art Sales/NFTs at Christie's",
        },
        {
            imgSrc: "img/members4.png",
            name: "Shira Lazar",
            role: "Founder/CEO of the Emmy Nominated digital media",
        },
        {
            imgSrc: "img/members5.png",
            name: "Hrish Lotlikar",
            role: "Co-Founder & CEO at SuperWorld",
        },
        {
            imgSrc: "img/members6.png",
            name: "Nicole Sales",
            role: "Business Director, Digital Art Sales/NFTs at Christie's",
        },
        {
            imgSrc: "img/members7.png",
            name: "Mai Fujimoto",
            role: "Miss Bitcoin Founder & CEO",
        },
        {
            imgSrc: "img/members8.png",
            name: "David Palmer",
            role: "Blockchain Lead at Vodafone Business",
        },
        {
            imgSrc: "img/members9.png",
            name: "Dr Guenther Dobrauz",
            role: "Partner & Leader PwC Legal Switzerland, Co-founder of exelixis capital",
        },
    ];

    return (
        <section id="members" className="members" data-aos="fade-right">
            <div className="members__container container">
                <h2 className="members__title stn-title">
                    Top members of the clubs at Connect.Club
                </h2>
                <div className="members__wrapper">
                    <SampleSlider object={members} />
                </div>
            </div>
        </section>
    );
};

export default Members;
