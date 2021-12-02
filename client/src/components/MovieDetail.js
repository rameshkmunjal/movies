import './movieList.css';
import React from 'react';


const MovieDetail = (movie) =>{
    console.log(movie);
    if (!movie.movie){ return <div>Loading....</div>}
    return (        
        <div className="movieBox container">
            <div className="posterBox">
                <img src={movie.movie.Poster} alt={movie.movie.Title} />
            </div>
            <div className="contentBox ui grid">
                <div className="rightBox eight wide column">
                    <p><b>Title : </b>{movie.movie.Title} </p>
                    <p><b>Year : </b>{movie.movie.Year} </p>
                    <p><b>Movie/Series : </b>{movie.movie.Type} </p>
                    <p><b>Runtime : </b>{movie.movie.Runtime} </p>
                    <p><b>Language : </b>{movie.movie.Language} </p>
                    <p><b>Director : </b>{movie.movie.Director} </p>  
                </div>
                <div className="leftSide eight wide column">
                    <p><b>Rating : </b>{movie.movie.imdbRating} </p>
                    <p><b>Country : </b>{movie.movie.Country} </p>
                    <p><b>Rewards : </b>{movie.movie.Rewards} </p>
                    <p><b>Released : </b>{movie.movie.Released} </p>                    
                </div>
                <p><b>Plot : </b>{movie.movie.Plot} </p>
                <p><b>Writer : </b>{movie.movie.Writer} </p>
                <p><b>Production : </b>{movie.movie.Production} </p>
            </div>
            
        </div>
    )
}




export default MovieDetail;