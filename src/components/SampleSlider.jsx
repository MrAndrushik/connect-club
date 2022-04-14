import Slider from "react-slick";
import { SampleNextArrow, SamplePrevArrow } from "./Arrows";

const SampleSlider = ({ object }) => {
    const settings = {
        arrows: true,
        dots: false,
        infinite: true,
        speed: 300,
        adaptiveHeight: true,
        centerPadding: 10,
        slidesToShow: 3,
        swipeToSlide: true,
        slidesToScroll: 1,
        prevArrow: <SamplePrevArrow />,
        nextArrow: <SampleNextArrow />,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    infinite: true,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {object.map((item, index) => (
                <div key={index} className="slider__item">
                    <img
                        className="slider__img"
                        src={item.imgSrc}
                        alt="member"
                    />
                    <h3 className="slider__name">{item.name}</h3>
                    <p className="slider__role">{item.role}</p>
                </div>
            ))}
        </Slider>
    );
};

export default SampleSlider;
