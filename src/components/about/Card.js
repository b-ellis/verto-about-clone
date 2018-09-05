import React from 'react'
import './About.css'

export const Card = props => 
      <div className='card'>
        <i className={`fa fa-${props.icon}`}></i>
        <span>
            {props.cardValue.split(' ')[0]}
            <br />
            {props.cardValue.split(' ')[1]}
        </span>
      </div>