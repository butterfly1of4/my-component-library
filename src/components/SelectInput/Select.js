import React, { Component } from "react";
import "./Select.stories.js";
import "./Select.css";
import arrow_down from "../SelectInput/arrow_down.png";

class Select extends Component {
  container = React.createRef();
  state = {
    open: false
  };
  componentDidMount() {
    document.addEventListener("mousedown", this.handleOnClick);
  }
  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }
  handleClickOutside = e => {
    if (this.container.current && !this.container.current.contains(e.target)) {
      this.setState({
        open: false,
      });
    }
  };
  handleOnClick = () => {
    this.setState(state => {
      return {
        open: !state.open,
      };
    });
  };
  render() {
    return (
      <div className="App">
        <div className="container" ref={this.container}>
          <div
            type="input"
            className="Input"
            placeholder="Select"
            onClick={this.handleOnClick}
          >
            Select <img src={arrow_down} placeholder="arrow" />
          </div>
          {this.state.open && (
            <div class="container">
              <ul className="">
                <li>Large</li>
                <li>Medium</li>
                <li>Small</li>
                <li>Extra-Small</li>
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Select;
