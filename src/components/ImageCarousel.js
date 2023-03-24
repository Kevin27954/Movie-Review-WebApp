import { Slider } from "@mui/material";

const ImageCarousel = ({ movies }) => {
    return (
        <div>
            {movies.map((movie) => (
              <img src={movie.poster}></img>
            ))}
        </div>
    );
};

export default ImageCarousel;
