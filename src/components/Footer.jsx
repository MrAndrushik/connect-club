import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <img
                    src="img/footer-logo.svg"
                    alt="Connect club"
                    className="footer__logo"
                />
                <div className="footer__content">
                    <ul className="footer__link-list">
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://connect.club/privacy"
                            className="footer__link"
                        >
                            Privacy policy
                        </a>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href="https://connect.club/terms"
                            className="footer__link"
                        >
                            Terms and Conditions
                        </a>
                    </ul>
                    <ul className="footer__social-list">
                        <a
                            href="https://discord.com/invite/kK3A9Bs8KV"
                            className="footer__social"
                        >
                            <img src="img/discord.svg" alt="discord" />
                        </a>
                        <a
                            href="https://twitter.com/ConnectClubHQ"
                            className="footer__social"
                        >
                            <img src="img/twitter.svg" alt="twitter" />
                        </a>
                        <a
                            href="https://apps.apple.com/app/connect-club-virtual-place/id1500718006"
                            className="footer__social"
                        >
                            <img src="img/apple.svg" alt="apple" />
                        </a>
                        <a
                            href="https://play.google.com/store/apps/details?id=com.connect.club"
                            className="footer__social"
                        >
                            <img src="img/google-play.svg" alt="google-play" />
                        </a>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
