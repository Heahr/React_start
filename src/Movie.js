import React, { Component } from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import LinesEllipsis from "react-lines-ellipsis";

class Movie extends Component {
  static propTypes = {
    //prop을 필수로 불러 들어와야 하는것. -> isRequired
    //즉, 부모에서 얻는 정보들이 어떤것인지 확인 가능. console창에 찍힘.
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    genres: PropTypes.array.isRequired,
    synopsis: PropTypes.string.isRequired
  };

  render() {
    return (
      <div className="Movie">
        <div className="Movie__Column">
          <MoviePoster poster={this.props.poster} alt={this.props.title} />
        </div>
        <div className="Movie__Column">
          <h1>{this.props.title}</h1>
          <div className="Movie__Genres">
            {this.props.genres.map((genres, index) => (
              <MovieGenres genres={genres} key={index} />
            ))}
          </div>
          <div className="Movie__Synopsis">
            <LinesEllipsis
              text={this.props.synopsis}
              maxLine="4"
              ellipsis="...."
              trimRight
              basedOn="letters"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Movie;

class MoviePoster extends Component {
  static propTypes = {
    poster: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired
  };
  render() {
    return (
      <img
        src={this.props.poster}
        alt={this.props.alt}
        title={this.props.alt}
        className="Movie__Poster"
      />
    );
  }
}

class MovieGenres extends Component {
  static propTypes = {
    genres: PropTypes.string.isRequired
  };
  render() {
    return <span className="Movie__Genre">{this.props.genres}</span>;
  }
}
/*
function Movie({ title, poster }) {
  return (
    <div>
      <MoviePoster poster={poster} />
      <h1>{title}</h1>
    </div>
  );
}

function MoviePoster({ poster }) {
  return <img src={poster} alt="movie poster" />;
}

Movie.PropTypes = {
  title: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired
};

MoviePoster.PropType = {
  poster: PropTypes.string.isRequired
};
*/
