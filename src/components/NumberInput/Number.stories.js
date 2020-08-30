import React, { Component } from 'react'
import './Number'
import { storiesOf} from '@storybook/react'

storiesOf('Number', module)

.add('Number', () => <Number Number plus minus counter/>)