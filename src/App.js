import React, { Component } from "react";
import "./App.css";
import Movie from "./Movie";

class App extends Component {
  // Render: componentWillMount() -> render() -> componentDidMount()
  // 1. api에 작업 요청 등등..(존재를 알아차림) 2. 데이터 관련 작업을 수행. 3.컴포넌트가 자리를 잡음
  // Update: compoenetWillReceiveProps() -> shouldComponentUpdate() -> componentWillUpdate() -> render() -> componentDidUpdate()
  // 1. 새로운 props를 받음. 2. 새로운 것을 살펴보고 이전과 새로운것이 다르면 업데이트 true설정 후 업데이터 실행
  // 3. 이전 작업과 동일하게 실행.(3. 업데이트중에 아이콘 등등.. 5. 에서 아이콘 숨기기 등)

  //promise는 asynchronous이다. 순서에 상관없이 진행된다. 또한 시나리오를 잡는 방법을 만들어주는데, 여러가지 방법중에 하나를 택할수 있게끔 한다. switch 문같이.
  //시나리오는 이와같은 상황을 가지고 관리한다.

  //then은 그냥 작업이 완료될때 실행.

  //err ->.catch(function(err) { console.log(err) });
  state = {};

  componentDidMount() {
    this._getMovies();
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
      console.log(movie);
      return (
        <Movie
          title={movie.title}
          poster={movie.large_cover_image}
          key={movie.id}
          genres={movie.genres}
          synopsis={movie.synopsis}
        />
      );
    });
    return movies;
  };

  _getMovies = async () => {
    const movies = await this._callApi();
    this.setState({
      movies
    });
  };

  //await은 실행이 완료되면(성공적인 실행이 아닌) 그값을 불러온다.

  _callApi = () => {
    return fetch("https://yts.am/api/v2/list_movies.json?sort_by=rating")
      .then(response => response.json()) //response는 아무 값이나 가능하며 하나의 애트리뷰트를 가져와 보여준다.
      .then(json => json.data.movies)
      .catch(err => console.log(err));
  };

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" : "App-Loading"}>
        {this.state.movies ? this._renderMovies() : "Loding..."}
      </div>
    );
  }
}

export default App;
