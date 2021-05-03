import React from 'react';
import MovieItem from './MovieItem';


const MovieList = ({movies, onMovieSelect}) =>{
    const renderedList = movies.map(movie =>{
        return (
            <div className="movieBox">                
                <MovieItem
                    key={movie.imdbID}
                    movie={movie}
                    onMovieSelect={onMovieSelect}
                />                
            </div>            
        )
    })

    return (<div className="ui relaxed divided list">{renderedList}</div>)
    
}

export default MovieList;