import React, { Component } from 'react';
import RandomForm from './RandomForm';
import Welcome from '../img/Welcome.gif'

export default class WorkSpace extends Component {
  state = { trx: ''}

  render() {      
      const { trx } = this.props
    if (trx !== '') {
        return (
            <RandomForm trx={this.props.trx} />
        )
    } else {
        return (
            <div>
                <img className='img-welcome' src={Welcome} alt='Welcome' />
            </div>
        )
    }
  }
}