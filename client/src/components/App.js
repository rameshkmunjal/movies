import React from 'react';
import SearchBar from './SearchBar';
import MovieList from './MovieList';
import MovieDetail from './MovieDetail';
import axios from 'axios';

class App extends React.Component
{
    constructor(props){
        super(props);
        this.state = { movies: [], selectedMovie: null };
        this.baseUrl = "http://www.omdbapi.com";
        this.authToken = "499e294";
    }

    

    componentDidMount = () =>{
        this.onTermSubmit("jungle");
    }

    onTermSubmit = async(term) =>{        
        const response = await axios.get(`${this.baseUrl}/?s=${term}&apikey=${this.authToken}`);
        const singleMovie = response.data.Search[0];
        this.setState({movies: response.data.Search});
        this.getSingleMovieDetails(singleMovie);
    }

    onMovieSelect = (movie) =>{        
        this.getSingleMovieDetails(movie);
    }

    getSingleMovieDetails = async (movie) =>{
        const singleMovieId = movie.imdbID;
        const res = await axios.get(`${this.baseUrl}/?i=${singleMovieId}&apikey=${this.authToken}`);
        this.setState({ selectedMovie: res.data });
    }

    render(){
        console.log(this.state.movies);
        return (
            <div className="ui container">
                <SearchBar onFormSubmit={this.onTermSubmit} />

                <div className="ui grid main">
                    <div className="eleven wide column">
                        <MovieDetail
                            movie={this.state.selectedMovie}
                        />
                    </div>
                    <div className="five wide column">
                        <MovieList
                            movies={this.state.movies}
                            onMovieSelect={this.onMovieSelect}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;