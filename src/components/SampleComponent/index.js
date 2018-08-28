import React from 'react'
import BEMHelper from 'react-bem-helper'
import './index.scss'

const block = new BEMHelper('SampleComponent')

export default props => (
  <div {...block({ modifiers: props.modifiers })}>
    <img {...block('image')} src={props.avatar} alt="" />

    <div {...block('description')}>
      <h2 {...block('descriptionname')}>{props.username}</h2>

      <p {...block('excerpt')}>{props.excerpt}</p>
    </div>
    <button {...block('button', 'left')}>Button</button>
    <button {...block('button', 'right top')}>Button</button>
  </div>
)
