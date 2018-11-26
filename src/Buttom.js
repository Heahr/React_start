import { Button, ButtonToolbar, } from 'react-bootstrap';
import React, { Component } from "react";
import './Buttom.css';


class Buttom extends Component {
    render() {
        return (
            <div className='Buttom'>
            
                <div className="test">
                <ButtonToolbar>
                    <Button bsStyle="success">Success</Button>
                </ButtonToolbar>
                </div>
                <div className="test">
                    <Button bsStyle="success">Success</Button>
                </div>
                <div className="test">
                    <Button bsStyle="warning">Primary</Button>
                </div>
                <div className="test">
                    <Button bsStyle="danger">Primary</Button>
                </div>
            </div>
        )
    }
}

export default Buttom

/*
import React, { Component } from "react";
import "./tA.css";

class tA extends Component {
    render() {
        return (
            <div>
                <div className='tAa'>
                    dasf
                </div>
            </div>
        )
    }
}

export default tA;

.tAa {
    position: fixed;
    top: 30px;
    right: 50px;
    border: 1px solid gray;
    width: 200px;
    height: 400px;
    background-color: black;
}
*/
