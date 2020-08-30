import React, { Component } from "react";
import "./Select.stories.js"
import "./Select.css"
// import "../../Icons/SelectDownArrow.png"

const Select = (props) => {
    const {large, medium, small, selected }= props;
    let classList= `Select`
    let opened = false
    let newText = ""

    
return (
    <div>
        {props.placeholder} 
    </div>
)
}

export default Select





// class Select extends Component {
//     constructor(props){
//         super(props)
//         this.state = {
//             placeholder: "",
//             isDown: false,
//             newText: ""
//         }
//         this.handleChange = this.handleChange.bind(this);
// 		this.handleSubmit = this.handleSubmit.bind(this);
//     handleEvent =(e) => {
//         this.setState({[e.target.placeholder]: e.target.value})
//         isDown === true
//     } 
//     }
//     render (){
//         let firstPlaceholder = this.props.placeholder
//         return (
//             <div>

//             </div>
//         )
//     }
// }