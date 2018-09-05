import React, { Component } from 'react'
import './Footer.css'

export default class Nav extends Component {
  render() {
    return (
      <div className='site-nav'>
        <div className='navigation'>
            <span>Company</span>
            <a href="/about">Team</a>
            <a href="/about">About</a>
        </div>
        <div className='navigation'>
            <span>Help</span>
            <a href="/contact">Contact Us</a>
        </div>
        <div className='navigation'>
            <span>Privacy</span>
            <a href="/policy">Privacy Policy</a>
            <a href="/terms">Terms of Use</a>
        </div>
      </div>
    )
  }
}
