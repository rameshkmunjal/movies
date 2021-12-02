import React from 'react';
import MovieItem from './MovieItem';


const MovieList = ({movies, onMovieSelect}) =>{
    const renderedList = movies.map(movie =>{
        return (
            <div>                
                <MovieItem
                    key={movie.imdbID}
                    movie={movie}
                    onMovieSelect={onMovieSelect}
                />                
            </div>            
        )
    })

    return (<div className="card-div">{renderedList}</div>)
    
}

export default MovieList;