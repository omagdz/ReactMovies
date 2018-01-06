import React, {Component} from 'react';

class Movie extends Component {
  render() {
    return(
      <div className="movie">
        <h2>{this.props.meta.title}</h2>
        <div><img src={this.props.meta.poster} width="200"/></div>
        <p>{this.props.meta.year}</p>
        <p>{this.props.meta.description}</p>
      </div>
    );
  }
}

export default Movie;
