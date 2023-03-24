import React from "react";

import ImgCarousel from "../imgCarosuel/imgCarosuel";

const Home = ({movies}) => {
    return (
        <div>
            <ImgCarousel movies={movies}></ImgCarousel>
        </div>
    );
}

export default Home;