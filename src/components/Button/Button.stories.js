import React, {Component} from 'react';
import './Button.css'
import { storiesOf } from '@storybook/react';

import Button from './Button';

// function onClick(){
//     alert("I'm clicked")
// }
    // onClick={onClick} 

storiesOf('Button', module)
.add('Small Primary', () => <Button type="primary" small primary label="small-primary" />) 
.add('Primary Hover', () => <Button type="primary" small primary hover label="small-primary-hover" />) 
.add('Small Primary Border', () => <Button type="primary" small primary label="small-primary-border" />) 
    .add('Small Primary Opaque', () => <Button type="primary" label="primary-small-opaque" />) 
    .add('Large Primary', () => <Button type="primary"  label="primary-large" />) 
    .add('Large Primary Border', () => <Button type="primary" label="primary-large-border" />) 
    .add('Large Primary Opaque', () => <Button type="primary" label="primary-large-opaque" />) 
    





    .add('Small Danger', () => <Button type="danger" label="Danger-Small" />)
    .add('Small Danger', () => <Button type="danger" label="Danger-Small" />)
    .add('Small Danger', () => <Button type="danger" label="Danger-Small" />)
    .add('Small Danger', () => <Button type="danger" label="Danger-Small" />)
    .add('Large Danger', () => <Button type="danger" label="Danger-Large" />)
    .add('Large Danger', () => <Button type="danger" label="Danger-Large" />)
    .add('Large Opaque', () => <Button type="danger" label="Danger-Large-Border" />)



    .add('Success', () => <Button type="success" label="Success" />)
    .add('Success', () => <Button type="success" label="Success" />)

    .add('Warning', () => <Button  type="warning" label="Warning" />)
    .add('Warning', () => <Button  type="warning" label="Warning" />)

    .add('Large Primary', () => <Button  type="primary" large label="large-primary" />)
    .add('small primary', () => <Button  type="primary" small outline label="Warning" />)



