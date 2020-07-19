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
.add('Primary Hover ', () => <Button type="primary" small hover label="Primary" />) 
.add('Border Primary', () => <Button type="primary" border small label="Primary" />) 
.add('Opaque Primary', () => <Button type="primary" opaque small label="Primary" />) 
.add('Large Primary', () => <Button type="primary"  large label="Primary" />)                                          
.add('Large Opaque Primary', () => <Button type="primary" large opaque label="Primary" />) 
.add('Large Border Primary', () => <Button type="primary" large border label="Primary" />) 
    

// .add('Small Danger', () => <Button type="danger" small label="Danger" />)                                               
// .add('Hover Danger', () => <Button type="danger" hover label="Danger" />)
// .add('Border Danger', () => <Button type="danger" small border label="Danger" />)
// .add('Opaque Danger', () => <Button type="danger" small opaque label="Danger" />)
// .add('Large Border Danger', () => <Button type="danger" large border label="Danger" />)
// .add('Large Opaque Danger', () => <Button type="danger" large opaque label="Danger" />)                                               
// .add('Large Danger', () => <Button type="danger" large label="Danger" />)


// .add('S-Success', () => <Button type="success" small label="Success" />)
// .add('SB-Success', () => <Button type="success" small border label="Success" />)
// .add('SH-Success', () => <Button type="success" small hover label="Success" />)
// .add('SO-Success', () => <Button type="success" small opaque label="Success" />)
// .add('L-Success', () => <Button type="success" large label="Success" />)
// .add('LO-Success', () => <Button type="success" large opaque label="Success" />)
// .add('LB-Success', () => <Button type="success" large border label="Success" />)

// .add('SWarning', () => <Button  type="warning" small label="Warning" />)
// .add('SH-Warning', () => <Button  type="warning" small hover label="Warning" />)
// .add('SO-Warning', () => <Button  type="warning" small opaque label="Warning" />)
// .add('SB-Warning', () => <Button  type="warning" small border label="Warning" />)
// .add('LB-Warning', () => <Button  type="warning" large border label="Warning" />)
// .add('LO-Warning', () => <Button  type="warning" large opaque label="Warning" />)
// .add('L-Warning', () => <Button  type="warning" large label="Warning" />)


// .add('S-Default', () => <Button  type="default" small label="Default" />)
// .add('SB-Default', () => <Button  type="default" small border label="Default" />)
// .add('SO-Default', () => <Button  type="default" small opaque label="Default" />)
// .add('SH-Default', () => <Button  type="default" small hover label="Default" />)
// .add('LO-Default', () => <Button  type="default" large opaque label="Default" />)
// .add('LB-Default', () => <Button  type="default" large border label="Default" />)
// .add('L-Default', () => <Button  type="default" large label="Default" />)

