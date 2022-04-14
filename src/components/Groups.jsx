import React from "react";

const Groups = () => {
    const groups = [
        {
            imgSrc: "img/groups1.png",
            title: "United Metaverse by Connect.Club",
            subs: 315,
        },
        {
            imgSrc: "img/groups2.png",
            title: "Angel Investors",
            subs: 301,
        },
        {
            imgSrc: "img/groups3.png",
            title: "Meta Vibes Tribe",
            subs: 233,
        },
        {
            imgSrc: "img/groups4.png",
            title: "THE PITCH CLUB",
            subs: 162,
        },
        {
            imgSrc: "img/groups5.png",
            title: "NFTs.Tips",
            subs: 436,
        },
        {
            imgSrc: "img/groups6.png",
            title: "NFT",
            subs: 1582,
        },
        {
            imgSrc: "img/groups7.png",
            title: "EtherBucks NFT: Currency in the Metaverse",
            subs: 259,
        },
        {
            imgSrc: "img/groups8.png",
            title: "Metaverse Builders",
            subs: 915,
        },
        {
            imgSrc: "img/groups9.png",
            title: "Future MetaLeaders",
            subs: 436,
        },
        {
            imgSrc: "img/groups10.png",
            title: "UNIQUEH-ORNS.NFT",
            subs: 140,
        },
        {
            imgSrc: "img/groups11.png",
            title: "The Land of NFTS",
            subs: 316,
        },
        {
            imgSrc: "img/groups12.png",
            title: "METAPRENEURS.888",
            subs: 91,
        },
        {
            imgSrc: "img/groups13.png",
            title: "Business Connections",
            subs: 356,
        },
        {
            imgSrc: "img/groups14.png",
            title: "MetaWorld",
            subs: 143,
        },
    ];
    return (
        <section id="clubs" className="groups">
            <div className="groups__container container">
                <h2 className="groups__title stn-title" data-aos="fade-right">
                    We are building Metaverse together with the following
                    communities at Connect.Club
                </h2>
                <div className="groups__wrapper">
                    {groups.map((item, index) => (
                        <div
                            key={index}
                            className="groups__item"
                            data-aos="fade-right"
                        >
                            <img src={item.imgSrc} alt="group icon" />
                            <div className="groups__content">
                                <h3 className="groups__caption">
                                    {item.title}
                                </h3>
                                <p className="groups__subs">{`• ${item.subs} members`}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Groups;
