import React, { Component } from 'react'
import './About.css'

import { Card } from './Card'

export default class About extends Component {
  render() {
    return (
      <section className='about'>
        <div className='description'>
            <h1>THE VERTO STORY</h1>
            <p>Listen guys...we know how much buying and selling stuff as a college student on Craigslist sucks. It's cluttered. It's confusing. It's sketchy. How do you know you're actually buying Dave Matthews' tickets or getting totally ripped off? We're just a couple of college students who get the struggle. We want to make it super easy for you to buy and sell stuff without all the hassle and uncertainty.</p>
        </div>
        <div className='description'>
            <h1>OUR PROMISE</h1>
            <p>When we were dreaming up Verto, we thought — why can't selling your stuff online look like your favorite brand? With Verto, we're delivering simplicity and sleekness. Our sellers are verified (all college students!), and you never have to interact with anyone you don't want to. We strive to be the safest, highest-quality platform to exchange goods.</p>
        </div>
        <div className='card-wrapper'>
            <Card icon='check' cardValue='Verified Sellers' />
            <Card icon='map-marker' cardValue='Local Exchanges' />
            <Card icon='lock' cardValue='Safety Guaranteed' />
            <Card icon='money' cardValue='Best Prices' />
        </div>
      </section>
    )
  }
}
