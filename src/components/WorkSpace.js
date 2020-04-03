import React, { Component } from 'react';

export default class WorkSpace extends Component {
  state = { trx: ''}

  render() {
    console.log('-->render')
    return (
      <div>{this.props.trx}</div>
    )
  }
}