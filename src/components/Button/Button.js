import React, {Component} from 'react';
import "./Button.css"
// import './PrimaryButton.css'
// import PrimaryButton from './PrimaryButton.js'
// This is a functional component - just sent up a little differently as an arrow function!

const Button = (props) => {
    // let classList = ""

    let classList = []
    let types = ['primary', 'success', 'danger','warning','large','small','outlne']
    if(types.includes(props.type)){
        // classList +=` `
        classList.push(`button-${props.type}`)
    if (props.large){
            classList.push("button-large")
        }
    if (props.small){
            classList.push("button-small")
        }
    }
    

   return <button className={classList.join(" ")}>
        {props.label}
    </button>
}
// onClick={props.when(Clicked)}
export default Button; 