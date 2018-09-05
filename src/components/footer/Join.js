import React from 'react'
import './Footer.css'

export const Join = props => 
    <div className='join'>
    <h1>Join Verto's Community</h1>
    <h3>Deals, trands, stories, and more!</h3>
    <form action="">
        <input type="text" placeholder='johnsmith@abc.com'/>
        <button onClick={props.handleSubmit}>Subscribe</button>
    </form>
    </div>
