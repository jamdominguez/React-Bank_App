import React, { Component } from 'react';
import RandomForm from './RandomForm';

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
            <div></div>
        )
    }
  }
}