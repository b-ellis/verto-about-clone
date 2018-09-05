import React, { Component } from 'react'
import './Footer.css'

import { Join } from './Join'
import Nav from './Nav'


export default class Footer extends Component {

  handleSubmit = (e) => {
    e.preventDefault();
  }

  render() {
    return (
      <footer className='footer'>
        <Join handleSubmit={this.handleSubmit}/>
        <Nav />
      </footer>
    )
  }
}
