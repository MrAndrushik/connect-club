import React from "react";

import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import Footer from "./components/Footer";
import Header from "./components/Header";

import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    React.useEffect(() => {
        const isMobile = () => {
            try {
                document.createEvent("TouchEvent");
                return true;
            } catch (e) {
                return false;
            }
        };

        if (isMobile()) {
            AOS.init({
                offset: 100,
                disable: false,
                duration: 500,
            });
        } else {
            AOS.init({
                offset: 150,
                disable: false,
                duration: 1000,
            });
        }
    }, []);

    return (
        <BrowserRouter>
            <Header />
            <AppRouter />
            <Footer />
        </BrowserRouter>
    );
}

export default App;
