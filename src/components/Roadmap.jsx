import React from "react";
import Sphere from "./Sphere";

const Roadmap = () => {
    return (
        <section id="roadmap" className="roadmap">
            <div className="roadmap__container container">
                <h2 className="roadmap__title stn-title">Road map</h2>
                <div className="roadmap__wrapper">
                    <div
                        className="roadmap__column roadmap__column--1"
                        data-aos="fade-right"
                    >
                        <h3 className="roadmap__caption">
                            PHASE 0: COMMUNITY BUILDING
                        </h3>
                        <div className="roadmap__content roadmap__content--1">
                            <p className="stn-text">
                                Today, the user at Connect.Club has various
                                opportunities such as
                            </p>
                            <p className="roadmap__text">
                                📌create an open or private club to unite your
                                community
                                <br />
                                📌hold events in various types of rooms
                                <br />
                                📌create and hold virtual art exhibitions,
                                linking artworks to marketplacesbr <br />
                                📌make new connections and more.
                            </p>
                        </div>
                    </div>
                    <div
                        className="roadmap__column roadmap__column--desctop roadmap__column--2"
                        data-aos="fade-right"
                    >
                        <h3 className="roadmap__caption">
                            PHASE 1: PUBLIC MINT
                        </h3>
                        <div className="roadmap__content roadmap__content--2">
                            <p className="roadmap__text">
                                Although the wider public would still have
                                access to&nbsp;Connect.Club platform, only
                                Membership owners will receive exclusive
                                opportunities. There will only ever
                                be&nbsp;10&nbsp;000&nbsp;NFT for our club
                                creators. Сonnect.Club Membership will
                                be&nbsp;minted in&nbsp;April.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="roadmap__wrapper--2">
                    <div className="roadmap__wrapper-content">
                        <Sphere />
                        <div>
                            <div
                                className="roadmap__column roadmap__column--tablet roadmap__column--2"
                                data-aos="fade-right"
                            >
                                <h3 className="roadmap__caption">
                                    PHASE 1: PUBLIC MINT
                                </h3>
                                <div className="roadmap__content roadmap__content--2">
                                    <p className="roadmap__text">
                                        Although the wider public would still
                                        have access to Connect.Club platform,
                                        only Membership owners will receive
                                        exclusive opportunities. There will only
                                        ever be 10 000 NFT for our club
                                        creators. Сonnect.Club Membership will
                                        be minted in April.
                                    </p>
                                </div>
                            </div>
                            <div
                                className="roadmap__column roadmap__column--3"
                                data-aos="fade-right"
                            >
                                <h3 className="roadmap__caption">
                                    PHASE 2: UTILITIES
                                </h3>
                                <div className="roadmap__content roadmap__content--3">
                                    <p className="roadmap__text">
                                        📌access to a dedicated community of
                                        like-minded people and exclusive events
                                        at Connect.Club
                                        <br />
                                        📌creating gallery of verified NFT
                                        artworksbr
                                        <br />
                                        📌room constructor
                                        <br />
                                        📌web version
                                        <br />
                                        📌possibility to launch their membership
                                        token that provides access to unique
                                        event at Connect.Club
                                        <br />
                                        📌opportunity to create a Connect.Club
                                        profile through Wallet-verification
                                    </p>
                                </div>
                            </div>
                            <div
                                className="roadmap__column roadmap__column--4"
                                data-aos="fade-right"
                            >
                                <h3 className="roadmap__caption">
                                    PHASE 3: BUILDING DAO
                                </h3>
                                <div className="roadmap__content roadmap__content--4">
                                    <p className="roadmap__text">
                                        We want to include the community in the
                                        growth and direction of Connect.Club
                                        moving forward
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Roadmap;
