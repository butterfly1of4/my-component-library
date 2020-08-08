import React, {Component} from 'react'
import {storiesOf} from '@storybook/react'
import Form from './Form'

function onChange() {
    Text = "Submitted"
}

storiesOf('Form', module)
.add('Small Email', () => <Form type="text" paceholder="Email" />)
.add('Medium Email', () => <Form type="text" paceholder="Email" />)
.add('Large Email', ()=> <Form type="text" paceholder="Email"  whenSubmitted={onChange} />)