import React, { Component, onClick } from "react";
import "./Button.css";

class Button extends Component {
    _callApi = () => {
        return fetch("https://yts.am/api/v2/list_movies.json?sort_by=year")
        .then(response => response.json()) //response는 아무 값이나 가능하며 하나의 애트리뷰트를 가져와 보여준다.
        .then(json => json.data.movies)
        .catch(err => console.log(err));
    }

    render() {
        return(
            <div className="Button">
                <button type = 'Button' onClick={this._callApi} >Click me</button>
                <button /*onClick=""*/>Click me</button>
                <button /*onClick=""*/>Click me</button>
                <button /*onClick=""*/>Click me</button>
                <button /*onClick=""*/>Click me</button>
            </div>
        )
    }
}

export default Button;