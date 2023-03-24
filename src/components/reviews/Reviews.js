import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
    var x = 0;

    const reviewText = useRef();
    let params = useParams();
    const movieId = params.movieId;

    useEffect(() => {
        getMovieData(movieId);
    }, []);

    const addReviews = async (e) => {
        e.preventDefault();
        const review = reviewText.current;

        try {
            const response = axios.post(
                "http://localhost:8080/api/v1/reviews",
                {
                    reviewBody: review.value,
                    imdbId: movieId,
                }
            );

            const updatedReviews = [...reviews, { reviewContent:review.value }]
            
            review.value = "";

            setReviews(updatedReviews);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <Container>
            <Row>
                <Col>
                    <h3>Reviews</h3>
                </Col>
            </Row>
            <Row className="mt-2">
                <Col>
                    <img src={movie?.poster} alt="" />
                </Col>
                <Col>
                    {
                        <>
                            <Row>
                                <Col>
                                    <ReviewForm
                                        handleSubmit={addReviews}
                                        revText={reviewText}
                                        labelText="Write a Review?"
                                    />
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    }
                    {reviews?.map((review, index) => {
                        return (
                            <>
                                <Row>
                                    <Col key={index}>{review.reviewContent}</Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <hr />
                                    </Col>
                                </Row>
                            </>
                        );
                    })}
                </Col>
            </Row>
            <Row>
                <Col>
                    <hr />
                </Col>
            </Row>
        </Container>
    );
};

export default Reviews;
