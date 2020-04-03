import React, { Component } from 'react'
import  LoginInfoPanel  from './LoginInfoPanel'

export default class NavigationPanel extends Component {
    state = { trx: '' }

    _handleOnChange = (e) => {
    this.setState({ trx: e.target.value })    
    }

    _handleSubmit = (e) => {
    e.preventDefault()
    console.log('_handleSubmit', this.state)
    this.props.onResult(this.state.trx)
    }

    render(){
        return(
            <div className=''>
            <form onSubmit={this._handleSubmit}>
                <input className='' maxLength='4' type='text' onChange={this._handleOnChange} value={this.state.trx}/>
                <button type='submit' style={ {visibility:'hidden'} }> --> </button>
            </form>
            <LoginInfoPanel logged={this.props.logged} userName={this.props.userName}/>
            </div>
        )
    }
}