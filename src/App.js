import "./App.css";
import api from "./api/axios_config.js";
import { useState, useEffect } from "react";
import Layout from "./components/Layout";
import Home from "./components/home/Home";
import { Routes, Route } from "react-router-dom";
import Reviews from "./components/reviews/Reviews";
import Header from "./components/header/Header";

function App() {
    // let searchItem = "?term=Moo&media=music&limit=20";
    let searchItem = "/api/v1/movies";

    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState();
    const [reviews, setReviews] = useState();

    const getMovies = async () => {
        //get movie data using axios
        try {
            const response = await api.get(searchItem);
            setMovies(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    const getMovie = async (movieId) => {
        try {
            const response = await api.get(`/api/v1/movies/${movieId}`);

            setMovie(response.data);

            // const reviewBody = [] 
            
            // response.data.reviewIds.forEach(element => {
            //     reviewBody.push(element.reviewContent);
            // })

            // console.log(response.data.reviewIds[0].id.timestamp)

            setReviews(response.data.reviewIds);

        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMovies();
    }, []);

    return (
        <div className="App">
            {/* <ImageCarousel movies={movies}></ImageCarousel> */}
            <Header/>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route path="/" element={<Home movies={movies} />} />
                    <Route
                        path="/Reviews/:movieId"
                        element={ 
                            <Reviews
                                getMovieData={getMovie}
                                movie={movie}
                                reviews={reviews}
                                setReviews={setReviews}
                            />
                        }
                    ></Route>
                </Route>
            </Routes>
        </div>
    );
}

export default App;
