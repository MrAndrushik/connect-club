import React from "react";
import About from "../components/About";
import Faq from "../components/Faq";
import Groups from "../components/Groups";
import Hero from "../components/Hero";
import Members from "../components/Members";
import Roadmap from "../components/Roadmap";
import Social from "../components/Social";
import Team from "../components/Team";
import Utilites from "../components/Utilites";
// import { Content } from "./Content";

const Main = () => {
    return (
        <main className="main">
            <Hero />
            <About />
            <Utilites />
            <Roadmap />
            <Groups />
            <Members />
            <Team />
            <Faq />
            <Social />
        </main>
    );
};

export default Main;
