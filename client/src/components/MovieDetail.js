import './movieList.css';
import React from 'react';

const MovieDetail = (movie) =>{
    console.log(movie);
    if (!movie)
    {
        return(<div>Loading....</div>)
    }
    return (        
        <div className="movieBox container">
            <div className="posterBox">
                <img src={movie.Poster} alt={movie.Title} />
            </div>
            <div className="contentBox ui grid">
                <div className="rightBox eight wide column">
                    <p><b>Title : </b>{movie.Title} </p>
                    <p><b>Year : </b>{movie.Year} </p>
                    <p><b>Movie/Series : </b>{movie.Type} </p>
                    <p><b>Runtime : </b>{movie.Runtime} </p>
                    <p><b>Language : </b>{movie.Language} </p>
                    <p><b>Director : </b>{movie.Director} </p>
                    
                    
                    
                </div>
                <div className="leftSide eight wide column">
                    <p><b>Rating : </b>{movie.imdbRating} </p>
                    <p><b>Country : </b>{movie.Country} </p>
                    <p><b>Rewards : </b>{movie.Rewards} </p>
                    <p><b>Released : </b>{movie.Released} </p>
                    
                </div>
                <p><b>Plot : </b>{movie.Plot} </p>
                <p><b>Writer : </b>{movie.Writer} </p>
                <p><b>Production : </b>{movie.Production} </p>
            </div>
            
        </div>
    )
}




export default MovieDetail;