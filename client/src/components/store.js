import React, {useEffect, useState} from 'react';
//import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import axios from 'axios';
import urlDetails from '../constants';

const App=()=>{
    const [movies, setMovies]=useState([]);
    const [selectedMovie, setSelectedMovie]=useState({});

    useEffect(() =>{
        const onTermSubmit = async(term) =>{        
            const response = await axios.get(`${urlDetails.baseUrl}/?s=${term}&apikey=${urlDetails.authToken}`);
            const singleMovie = response.data.Search[0];
            setMovies({movies: response.data.Search});
            getSingleMovieDetails(singleMovie);
        }

        onTermSubmit(urlDetails.randomTerm);
    }, [])

    

    const onMovieSelect = (movie) =>{        
         getSingleMovieDetails(movie);
    }

    const getSingleMovieDetails = async (movie) =>{
        const singleMovieId = movie.imdbID;
        const res = await axios.get(`${urlDetails.baseUrl}/?i=${singleMovieId}&apikey=${urlDetails.authToken}`);
        setSelectedMovie({ selectedMovie: res.data });
    }

   
        return (
            <div className="ui container">
                

                <div className="ui grid main">
                    <div className="eleven wide column">
                        <MovieDetail
                            movie={selectedMovie}
                        />
                    </div>
                    <div className="five wide column">
                        <MovieList
                            movies={movies}
                            onMovieSelect={onMovieSelect}
                        />
                    </div>
                </div>
            </div>
        )
    
}

export default App;