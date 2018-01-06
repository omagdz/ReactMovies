import React, { Component } from 'react';
import Header from './Header';
import Movie from './Movie';
import {initialMovies} from '../movies';
import {additionalMovies} from '../movies';
import AddMovie from './AddMovie';
import '../App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      movies: initialMovies
    };
  }

  addMovieToGallery( movie ) {
    var ts = Date.now();
    var newMovie = {};
    newMovie['movie' + ts] = movie;
    var currentMovies = {...this.state.movies};
    var newMovies = Object.assign(currentMovies, newMovie);
    this.setState({movies: newMovies});
  }

  loadAdditionalMovies() {
    var currentMovies = {...this.state.movies};
    var newMovies = Object.assign( currentMovies, additionalMovies );
    this.setState({movies: newMovies});
  }
    render() {
    return (
      <div className="App">
        <Header text="Discover Your Movie Mojo!" />
        <p className="App-intro">Sharing a few of our favourite movies</p>
        <div className="movies">
        {
          Object
            .keys(this.state.movies)
            .map(key => <Movie key={key} meta={this.state.movies[key]} />)
        }
        </div>
        <div className="add-movies"><button onClick={this.loadAdditionalMovies.bind(this)}>Load more..</button></div>
        <AddMovie addMovie={this.addMovieToGallery.bind(this)} />
      </div>
    );
  }
}

export default App;
