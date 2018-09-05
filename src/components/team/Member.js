import React from 'react'
import './Team.css'

export const Member = props => 

<div className='member'>
    <img src={props.image} alt={props.name}/>
    <span className='name'>{props.name}</span>
    <span className='title'>{props.title}</span>
</div>