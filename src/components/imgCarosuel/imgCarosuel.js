import React from "react";
import "./ImgCarosuel.css";
import Carousel from "react-material-ui-carousel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { Paper } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const ImgCarousel = ({ movies }) => {

    const navigate = useNavigate();

    function reviews(movieId)
    {
        navigate(`/Reviews/${movieId}`);
    }

    return (
        <div className="movie-carousel-container">
            <Carousel>
                {movies.map((movies) => {
                    return (
                        <Paper>
                            <div
                                className="movie-card-container"
                                style={{
                                    backgroundImage: `url(${movies.poster})`,
                                    backgroundRepeat: "no-repeat",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center",
                                }}
                            >
                                <div className="movie-card">
                                    <div className="movie-detail">
                                        <div className="movie-poster">
                                            <img src={movies.poster} />
                                        </div>
                                        <div className="move-title">
                                            <p>{movies.title}</p>
                                        </div>
                                        <div className="movie-buttons-container">
                                            <Link to={`${movies.trailerLink}`}>
                                                <div className="play-button-icon-container">
                                                    <FontAwesomeIcon
                                                        className="play-button-icon"
                                                        icon={faCirclePlay}
                                                    />
                                                </div>
                                            </Link>

                                            <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movies.imdbId)} >Reviews</Button>
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Paper>
                    );
                })}
            </Carousel>
        </div>
    );
};

export default ImgCarousel;
