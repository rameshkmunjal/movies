import React from 'react';
import './movieList.css';
import { Card } from "react-bootstrap";



const MovieItem = ({ movie , onMovieSelect}) =>{
    return (
        <div>
  <Card className="card">
    <Card.Img className="card-img" variant="top" src={movie.Poster} />
    <Card.Body>
      <Card.Text className="card-title">
        {movie.Title}
      </Card.Text>
    </Card.Body>
  </Card>
  
</div>
    )
}

export default MovieItem;