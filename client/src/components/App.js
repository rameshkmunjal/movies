import React, {useState, useEffect} from 'react';
import axios  from 'axios';
import Header from './Header';
import Footer from './Footer';
import MovieList from './MovieList';


const App=()=>{
    const [movieData, setMovieData] = useState([]);
    //const [movie, setSingleMovie]=useState(null);
    const baseUrl = "https://www.omdbapi.com";
    const authToken = "499e294";
    const termArr=["king", "queen", "dark", "night", "day"];
    let arr=[];
    
    
    useEffect(() =>{
        const getAllMovies = async (term) =>{
            const response = await axios.get(`${baseUrl}/?s=${term}&apikey=${authToken}`);
            //console.log("line no 22" , response.data);
            const responseData = response.data.Search;
            console.log( response.data.Search);
                arr.push(responseData);
            //const firstMovie=response.data.Search[0];
            //getSingleMovieDetails(firstMovie);
            //setMovieData(responseData); 
            //setSingleMovie(firstMovie);
            if(arr.length===termArr.length){
                console.log(arr);
                let moviesArr = arr.reduce(
                    ( previousValue, currentValue ) => previousValue.concat(currentValue),
                    []
                )
                console.log(moviesArr);
                setMovieData(moviesArr);
                   
            }
                     
        }
        
       termArr.map(t=>{ getAllMovies(t);})
    
    }, []);
/*
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
      <MovieList movies={movieData} onMovieSelect={onMovieSelect}/>
    */
    return(       
        <div className="ui container">
            <Header />
            <div className="ui grid main">                    
                    <div className="sixteen wide column">
                          <MovieList movies={movieData} />                       
                    </div>
                </div>
            <Footer />
        </div>
    )
}

export default App;