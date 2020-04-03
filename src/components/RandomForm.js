import React, { Component } from 'react'

export default class RandomForm extends Component {
    render() {
        return(
            <form className='form-bank'>
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label className='label-bank' htmlFor="validationDefault01">First name</label>
                        <input type="text" className="form-control" id="validationDefault01" required/>
                    </div>
                    <div className="col-md-4 mb-3">
                    <label className='label-bank' htmlFor="validationDefault02">Last name</label>
                    <input type="text" className="form-control" id="validationDefault02" required/>
                    </div>
                    <div className="col-md-4 mb-3">
                    <label className='label-bank' htmlFor="validationDefaultUsername">Username</label>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text" id="inputGroupPrepend2">@</span>
                        </div>
                        <input type="text" className="form-control" id="validationDefaultUsername" aria-describedby="inputGroupPrepend2" required/>
                    </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                    <label className='label-bank' htmlFor="validationDefault03">City</label>
                    <input type="text" className="form-control" id="validationDefault03" required/>
                    </div>
                    <div className="col-md-3 mb-3">
                    <label className='label-bank' htmlFor="validationDefault04">State</label>
                    <input type="text" className="form-control" id="validationDefault04" required/>
                    </div>
                    <div className="col-md-3 mb-3">
                    <label className='label-bank' htmlFor="validationDefault05">Zip</label>
                    <input type="text" className="form-control" id="validationDefault05" required/>
                    </div>
                </div>
                <div className="form-group btn-section-bank" align='center'>
                        <button className="btn btn-light" type="submit">Aceptar</button>
                        <button className="btn btn-light" type="submit">Modificar</button>
                        <button className="btn btn-light" type="submit">Ver PDF</button>
                        <button className="btn btn-light" type="submit">Submit form for {this.props.trx}</button>

                </div>
            </form>            
        )
    }
}