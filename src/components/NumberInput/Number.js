import React, { Component } from "react";
import "./Number.css";
import Minus from "./Minus.png"
import Plus from "./Plus.png"

let classList = ["minus", "counter", "plus"]
// let subtract = <img src={Minus} />
// let add = <img src={Plus} />

class Number extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0,
      increment: 1,
      clicked: false,
      newCount: num
    };
    this.handlePlus = this.handlePlus.bind(this);
    this.handleMinus = this.handleMinus.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handlePlus = () => {
    let newCount = this.state.value +1
    this.setState({ value: newCount });
  };

  handleMinus = () => {
    let newCount = this.state.value -1
    this.setState({ value:newCount });
  };

  handleClick =(e)=> {
    
    this.setState({newCount: value})
  }
  render() {
     
    return (
    <div className={classList}>
                  
      <div >{this.state.value}</div>
      <div className ="minus" {...handleMinus}>-</div>
        {this.state.newCount}
      <div className="plus" {...handlePlus}>+</div>
    </div>

    )
  }
}
export default Number;
