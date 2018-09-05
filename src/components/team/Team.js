import React, { Component } from 'react'
import './Team.css';

import { Member } from './Member'

import Pablo from '../../assets/pablo.png'
import Soon from '../../assets/soon.png'
import Karthik from '../../assets/kart.jpg'
import Alana from '../../assets/alana.png'
import Guido from '../../assets/Guido.png'

export default class Team extends Component {
  render() {
    return (
      <section className='team'>
        <div className='divider'>
            <div>
                <i className='fa fa-shopping-cart'></i>
            </div>
        </div>
        <h1>Our Team</h1>
        <div className='member-wrapper'>
            <Member image={Pablo} name='Pablo F' title='CEO' />
            <Member image={Soon} name='Soon H' title='CTO' />
            <Member image={Karthik} name='Karthik M' title='Development Lead' />
            <br />
            <Member image={Alana} name='Alana M' title='UX Designer' />
            <Member image={Guido} name='Guido D' title='Developer' />
        </div>
      </section>
    )
  }
}
