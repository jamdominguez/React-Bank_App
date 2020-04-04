import React, { Component } from 'react'
// Simulate the bacnk end data
import trxData from '../trx_data/TLD2.json' 
import Template from '../trx_templates/TLD2'

export default class TLD2 extends Component {
    componentDidMount() {        
        this.setState(trxData)
        if(typeof trxData !== 'undefined') this.props.onDataTrxLoad(trxData.operation)
    }

    _handleImport = (e) => {        
        const newState = this.state
        newState.data.import = e.target.value
        this.setState(newState)        
    }

    _handleCheck = (e) => {
        const newState = this.state
        newState.data.skypComission = e.target.checked
        this.setState(newState)                   
    }

    render() {        
        return this.state ? <Template trxData={this.state} onChange={this._handleImport} onChangeCheck={this._handleCheck}/> : <></>        
    }
}