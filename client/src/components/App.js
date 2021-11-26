import React, {useState, useEffect} from 'react';
import axios  from 'axios';
import Header from './Header';
import Footer from './Footer';
import MovieList from './MovieList';
import MovieDetail  from './MovieDetail';

const App=()=>{
    const [movieData, setMovieData] = useState([]);
    const [movie, setSingleMovie]=useState(null);
    const baseUrl = "http://www.omdbapi.com";
    const authToken = "499e294";
    const term="king";
    
    useEffect(() =>{
        const getAllMovies = async () =>{
            const response = await axios.get(`${baseUrl}/?s=${term}&apikey=${authToken}`);
            //console.log("line no 22" , response.data);
            const responseData = response.data.Search;
            console.log("line no 18" , response.data.Search[0]);
            const firstMovie=response.data.Search[0];
            getSingleMovieDetails(firstMovie);
            setMovieData(responseData); 
            setSingleMovie(firstMovie);          
        }

        getAllMovies();
    }, []);

    const onMovieSelect=(movie)=>{
        getSingleMovieDetails(movie);
    }

    const getSingleMovieDetails=async(movie)=>{
        console.log(movie);
        const movieId = movie.imdbID;
        const res = await axios.get(`${baseUrl}/?i=${movieId}&apikey=${authToken}`);
        console.log(res.data);
        setSingleMovie(res.data);
    }
    return(       
        <div className="ui container">
            <Header />
            <div className="ui grid main">
                    <div className="eleven wide column">
                       <MovieDetail movie={movie} />
                    </div>
                    <div className="five wide column">
                          <MovieList movies={movieData} onMovieSelect={onMovieSelect}/>
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default App;