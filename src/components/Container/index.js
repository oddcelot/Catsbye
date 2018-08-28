import React from 'react'
import BEMHelper from 'react-bem-helper'
import './container.scss'

const block = new BEMHelper('container')

export default props => (
  <div {...block({ modifiers: props.modifiers })}> {props.children}</div>
)
