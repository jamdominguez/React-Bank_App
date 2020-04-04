import React, { Component } from 'react'
// Simulate the bacnk end data
import trxData from '../trx_data/TLMV.json' 
import Template from '../trx_templates/TLMV'

export default class TLMV extends Component {
    componentDidMount() {        
        this.setState(trxData)
        if(typeof trxData !== 'undefined') this.props.onDataTrxLoad(trxData.operation)
    }

    render() {       
        return this.state ? <Template trxData={this.state} onChange={this._handleImport} onChangeCheck={this._handleCheck}/> : <></>                
    }
}