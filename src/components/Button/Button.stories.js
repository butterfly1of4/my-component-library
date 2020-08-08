import React, {Component} from 'react';
import './Button.css'
import { storiesOf } from '@storybook/react';

import Button from './Button';

// function onClick(){
//     alert("I'm clicked")
// }
    // onClick={onClick} 

storiesOf('Button', module)
//Primary
.add('Small Primary', () => <Button type="primary" small label="Primary" />) 
.add('Hover Primary', () => <Button type="primary" hover small label="Primary" />) 
.add('Border Primary', () => <Button type="primary" border small label="Primary" />) 
.add('Opaque Primary', () => <Button type="primary" opaque small label="Primary" />) 
.add('Large Primary', () => <Button type="primary" large label="Primary" />)                                          
.add('Large Opaque Primary', () => <Button type="primary" large opaque label="Primary" />) 
.add('Large Border Primary', () => <Button type="primary" border large label="Primary" />) 
    

// .add('Small Danger', () => <Button type="danger" small label="Danger" />)                                               
// .add('Hover Danger', () => <Button type="danger" hover small label="Danger" />)
// .add('Border Danger', () => <Button type="danger" small border label="Danger" />)
// .add('Opaque Danger', () => <Button type="danger" small opaque label="Danger" />)
// .add('Large Border Danger', () => <Button type="danger" large border label="Danger" />)
// .add('Large Opaque Danger', () => <Button type="danger" large opaque label="Danger" />)                                               
// .add('Large Danger', () => <Button type="danger" large label="Danger" />)


// .add('Snall Success', () => <Button type="success" small label="Success" />)
// .add('Small Border Success', () => <Button type="success" small border label="Success" />)
// .add('Small Hover Success', () => <Button type="success" small hover label="Success" />)
// .add('Small Opaque Success', () => <Button type="success" small opaque label="Success" />)
// .add('Large Success', () => <Button type="success" large label="Success" />)
// .add('Large Opaque Success', () => <Button type="success" large opaque label="Success" />)
// .add('Large Border Success', () => <Button type="success" large border label="Success" />)

// .add('Small Warning', () => <Button  type="warning" small label="Warning" />)
// .add('Small Hover Warning', () => <Button  type="warning" small hover label="Warning" />)
// .add('Small Opaque Warning', () => <Button  type="warning" small opaque label="Warning" />)
// .add('Small Border Warning', () => <Button  type="warning" small border label="Warning" />)
// .add('Large Border Warning', () => <Button  type="warning" large border label="Warning" />)
// .add('Large Opaque Warning', () => <Button  type="warning" large opaque label="Warning" />)
// .add('Large Warning', () => <Button  type="warning" large label="Warning" />)


// .add('Small Default', () => <Button  type="default" small label="Default" />)
// .add('Small Border Default', () => <Button  type="default" small border label="Default" />)
// .add('Small Opaque Default', () => <Button  type="default" small opaque label="Default" />)
// .add('Small Hover Default', () => <Button  type="default" small hover label="Default" />)
// .add('Larger Opaque Default', () => <Button  type="default" large opaque label="Default" />)
// .add('Large Border Default', () => <Button  type="default" large border label="Default" />)
// .add('Large Default', () => <Button  type="default" large color label="Default" />)

// .add('AddCart', () => <Button type="cart" small opaque label="Add To Cart" />)
// .add('AddFavorites', () => <Button type="heart" label="Add To Favorites" />)
// .add('Heart', () => <Button type="heart" label="Heart" />)
// .add('Cart', () => <Button type='cart' label="Cart" />)