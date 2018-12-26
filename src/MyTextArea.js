import React, { Component } from "react";
import "./MyTextArea.css";
import $ from 'jquery';

class MyTextArea extends Component {
    state = {
        isHidden: true
    }

    _toggleHidden () {
        this.setState ({
            isHidden: !this.state.isHidden
        })
    }
    
    /*
    getScrollOffsets = (w) => {
        w = w || window;
        if (w.pageXOffset != null) {
            return { x: w.pageXOffset, y: w.pageYOffset };
        }

        var d = w.document;
        if (document.compatMode == "CSS1Compat") {
            return { x: d.documentElement.scrollLeft, y: d.documentElement.scrollTop };
        }

        return { x: d.body.scrollLeft, y: d.body.scrollTop };
    }

    drag = (elementToDrag, event) => {
        var scroll = getScrollOffsets();
        var startX = event.clientX + scroll.x;
        var startY = event.clientY + scroll.y;

        var origX = elementToDrag.offsetLeft;
        var origY = elementToDrag.offsetTop;

        var deltaX = startX - origX;
        var deltaY = startY - origY;

        if (document.addEventListener) {
            document.addEventListener("mousemove", moveHandler, true);
            document.addEventListener("mouseup", upHandler, true);
        } else if (document.attachEvent) {
            elementToDrag.setCapture();
            elementToDrag.attachEvent("onmousemove", moveHandler);
            elementToDrag.attachEvent("onmouseup", upHandler);
            elementToDrag.attachEvent("onlosecapture", upHandler);
        }

        if (event.stopPropagation) {
            event.stopPropagation();
        } else {
            event.cancelBubble = true;
        }

        if (event.preventDefault) {
            event.preventDefault();
        } else {
            event.returnValue = false;
        }

        moveHandler = (e) => {
            if (!e) {
                e = window.event;
            }

            var scroll = getScrollOffsets();
            elementToDrag.style.left = (e.clientX + scroll.x - deltaX) + "px";
            elementToDrag.style.top = (e.clientY + scroll.y - deltaY) + "px";

            if(e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        }

        upHandler = (e) => {
            if (!e) e = window.event;

            if (document.removeEventListener) {
                document.removeEventListener("mouseup", upHandler, true);
                document.removeEventListener("mousemove", moveHandler, true);
            } else if (document.detachEvent) {
                elementToDrag.detachEvent("onlosecapture", upHandler);
                elementToDrag.detachEvent("onmouseup", upHandler);
                elementToDrag.detachEvent("onmousemove", moveHandler);
                elementToDrag.releaseCapture();
            }

            if (e.stopPropagation) {
                e.stopPropagation();
            } else {
                e.cancelBubble = true;
            }
        }
    }
    */

    _getSelect () {
        var selectionText = "";
        if (document.getSelection) {
            selectionText = document.getSelection();
        } else if (document.selection) {
            selectionText = document.selection.createRange().text;
        }
        return console(selectionText);
    }

    render() {
        return (
            <div className='fixed'>
                <div onClick={this._toggleHidden.bind(this)}>
                    T
                </div>
                <div>
                    {!this.state.isHidden && <TextArea />}
                </div>
            </div>
        )
    }
}

export default MyTextArea;

class TextArea extends Component {

    _dropdown () {
        document.getElementById("myDropdown").classList.toggle("show");
    }

    _getSelect () {
        let key = window.getSelection();
        alert(key);
    }

    render() {
        return (
            <div className='TextArea'>
                <div className='TextArea--top'>
                    <div className='TextArea--top--content' >
                        <button onClick={this._dropdown}>text</button>
                        <div id="myDropdown" className="dropdown-content">
                            <a href="#home">8pt</a>
                            <a href="#about">10pt</a>
                            <a href="#contact">12pt</a>
                        </div>
                    </div>
                    <div className='TextArea--top--content'>
                        <button onClick={this._dropdown}>bold</button>
                            <div id="myDropdown" className="dropdown-content">
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                    <div className='TextArea--top--content'>
                        <button onClick={this._dropdown}>??</button>
                            <div id="myDropdown" className="dropdown-content">
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                    <div className='TextArea--top--content'>
                        <button onClick={this._dropdown}>??</button>
                            <div id="myDropdown" className="dropdown-content">
                                <a href="#home">Home</a>
                                <a href="#about">About</a>
                                <a href="#contact">Contact</a>
                            </div>
                        </div>
                </div>
                <div className='TextArea--main' contentEditable='true'>main</div>
                <button className='TextArea--bottom' onClick={this._getSelect}>제출</button>
            </div>
        );
    }
}