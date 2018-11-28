import React, { Component } from 'react';
import './App.css';
import Movie from './Movie';
import Buttom from './Buttom';
import MyTextArea from './MyTextArea';
import $ from 'jquery';
// import Button from './Button';

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
  url = {};
  
  // constructor(props) {
  //   super(props);
  //   this._drag = this._drag.bind(this);
  // }
  
  componentDidMount() {
    this._getMovies('rating');
    $(window).scroll(() => { 
      if ( $(window).scrollTop() === $(document).height() - $(window).height()) {
        this._drag();
      }
    });
  }

  _drag = () => {
    console.log("this.state.movies.length")
  }

  _renderMovies = () => {
    const movies = this.state.movies.map(movie => {
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
    // console.log(this.state.movies.length)
    return movies;
  };

  /*
  _renderButton = () => {
    let n = false;
    return (
      <Button />
    )
  }
*/

  _getMovies = async (sort, num) => {
    const movies = await this._callApi(sort, num);
    this.setState({
      movies
    });
  };

  _moreMovies = () => {
    console.log("this.state.moives.length")
    //let a = this.state.movies? undefined : this.state.movies.length;
    /*
    const movies = this._callApi(a);
    this.setState({
      movies
    })
    */
  }
  
  //await은 실행이 완료되면(성공적인 실행이 아닌) 그값을 불러온다.

  _callApi = (sort, num) => {
    if(!sort && !num) {
    return fetch('https://yts.am/api/v2/list_movies.json?sort_by=rating')
      .then(save => this.url.address = save)
      .then(response => response.json()) //response는 아무 값이나 가능하며 하나의 애트리뷰트를 가져와 보여준다.
      .then(json => json.data.movies)
      .catch(err => console.log(err));
    } else if (this.url.address) {
      return fetch(`${this.url.address}&limit=${num}`)
      .then(save => this.url.address = save)
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
    } else {
      return fetch(`https://yts.am/api/v2/list_movies.json?sort_by=${sort}&limit=${num}`)
      .then(save => this.url.address = save)
      .then(response => response.json())
      .then(json => json.data.movies)
      .catch(err => console.log(err));
    }
  };

  button_rating = () => {
    this.url.address = 'https://yts.am/api/v2/list_movies.json?sort_by=rating'
    console.log(this.url.address)
    this._getMovies(this.url.address)
  }
  button_title = () => {
    this.url.address = 'https://yts.am/api/v2/list_movies.json?sort_by=title'
    console.log(this.url.address)
    this._getMovies(this.url.address)
  }
  button_download = () => {
    this.url.address = 'https://yts.am/api/v2/list_movies.json?sort_by=download_count'
    console.log(this.url.address)
    this._getMovies(this.url.address)
  }
  button_like = () => {
    this.url.address = 'https://yts.am/api/v2/list_movies.json?sort_by=like_count'
    console.log(this.url.address)
    this._getMovies(this.url.address)
  }
  button_date = () => {
    this.url.address = 'https://yts.am/api/v2/list_movies.json?sort_by=date_added'
    console.log(this.url.address)
    this._getMovies(this.url.address)
  }

  _textBox = () => {
    if(this.toggleTextBox === "none") {
      this.toggleTextBox = "";
      console.log(this.toggleTextBox);
    }
    else{
      this.toggleTextBox = "none";
      console.log(this.toggleTextBox);
    }
  }

  render() {
    const { movies } = this.state;
    return (
      <div className={movies ? "App" :  "App-Loading"}>
        <div className="Botton">
          <button onClick={this.button_rating} >rating</button>
          <button onClick={this.button_title} >title</button>
          <button onClick={this.button_download} >download_count</button>
          <button onClick={this.button_like} >like_count</button>
          <button onClick={this.button_date} >date_added</button>
        </div>
        <MyTextArea />
        {this.state.movies ? this._renderMovies(): "Loding..."}
        <div className='Buttom'>
          <Buttom />
        </div>
      </div>
    );
  }
}

export default App;
