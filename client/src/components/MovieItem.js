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
                <div className="header"><b>{movie.Title}</b></div>
                <div className="header"><b>{movie.Year}</b></div>
                <div className="header"><b>{movie.Type}</b></div>
            </div>
        </div>
    )
}

export default MovieItem;