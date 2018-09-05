import React, { Component } from 'react'
import './Header.css'

export default class Header extends Component {
  render() {
    return (
      <div className='nav'>
        <a className='logo' href="/home">VERTO</a>
        <div>
            <a className='sell' href="/sell">Sell +</a>
            <span className='login'>Log In</span>
        </div>
      </div>
    )
  }
}
