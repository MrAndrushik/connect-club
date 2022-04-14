export function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ cursor: "pointer" }}
            className="arrow arrow-prev"
            onClick={onClick}
        >
            {" "}
            <img src="img/prev.svg" alt="" />{" "}
        </div>
    );
}

export function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            style={{ cursor: "pointer" }}
            className="arrow arrow-next"
            onClick={onClick}
        >
            {" "}
            <img src="img/next.svg" alt="" />{" "}
        </div>
    );
}
