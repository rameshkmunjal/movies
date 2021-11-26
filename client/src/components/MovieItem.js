import React from 'react';
import './movieList.css';


const MovieItem = ({ movie , onMovieSelect}) =>{
    return (
        <div className="imgBox" onClick={()=>onMovieSelect(movie)}> 
            <img
                className="ui image"
                src={movie.Poster}
                alt={movie.Title}
                width={100}
                height={150}
            />
            <div className="content">
                <div className="movieTitle">{movie.Title}</div>
                <div><span>{movie.Type}</span> ( <span>{movie.Year}</span> ) </div>
            </div>
        </div>
    )
}

export default MovieItem;