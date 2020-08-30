import React, { Component } from 'react'
import './Number'
import { storiesOf} from '@storybook/react'

storiesOf('Number', module)

.add('Counter', () => <Counter Number plus minus counter/>)