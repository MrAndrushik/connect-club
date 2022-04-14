import React from "react";
import Button from "./UI/button/Button";
import useModal from "../hooks/useModal";
const Header = () => {
    const [scrolled, setScrolled] = React.useState("");
    const { onToggle, isOpen, onClose } = useModal();

    const handleScroll = () => {
        if (window.scrollY > 500) {
            setScrolled(true);
        } else {
            setScrolled(false);
        }
    };

    const handleLinks = (e) => {
        const href = e.target.getAttribute("href");
        e.preventDefault();
        onClose();
        document.querySelector("html").classList.remove("hidden");
        document.querySelector(href).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    };

    const onBurgerClick = () => {
        document.querySelector("html").classList.toggle("hidden");
        onToggle();
    };

    const links = [
        {
            title: "About us",
            href: "#about",
        },
        {
            title: "Utility",
            href: "#utility",
        },
        {
            title: "Road map",
            href: "#roadmap",
        },
        {
            title: "Clubs",
            href: "#clubs",
        },
        {
            title: "Speakers",
            href: "#members",
        },
        {
            title: "Team",
            href: "#team",
        },
        {
            title: "FAQ",
            href: "#faq",
        },
        {
            title: "Contacts",
            href: "#contacts",
        },
    ];

    React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header className={scrolled ? "header header--sticky" : "header"}>
            <div className="header__container container">
                <img
                    className="header__logo"
                    src="../img/logo.svg"
                    alt="Connect club"
                />
                <div
                    className={
                        isOpen
                            ? "header__wrapper header__wrapper--active"
                            : "header__wrapper"
                    }
                >
                    <div
                        className={
                            isOpen
                                ? "header__body header__body--active"
                                : "header__body"
                        }
                    >
                        <ul className="header__list">
                            {links.map((item, index) => (
                                <li key={index} className="header__item">
                                    <a
                                        href={item.href}
                                        className="header__link"
                                        onClick={(e) => handleLinks(e)}
                                    >
                                        {item.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                        <div className="header__block">
                            <a
                                href="https://connect-club.gitbook.io/white-paper/"
                                className="header__link"
                            >
                                White paper
                            </a>
                        </div>
                        <Button
                            link="https://stage.connect.club/membership/2"
                            classNames="header__btn"
                        >
                            Mint
                        </Button>
                    </div>
                </div>
                <button
                    className={isOpen ? "burger--open burger" : "burger"}
                    onClick={() => onBurgerClick()}
                >
                    <div className="burger__line"></div>
                    <div className="burger__line"></div>
                    <div className="burger__line"></div>
                </button>
            </div>
        </header>
    );
};

export default Header;
