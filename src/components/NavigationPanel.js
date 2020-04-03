import React, { PureComponent } from 'react'
import  LoginInfoPanel  from './LoginInfoPanel'
import  Title  from './Title'


export default class NavigationPanel extends PureComponent {
    state = { trx: '', description: '' }

    _handleOnChange = (e) => {
    this.setState({ trx: e.target.value})    
    }

    _handleSubmit = (e) => {
    e.preventDefault()
    let msg = ''
    if(this.state.trx === 'TLMV') msg = 'Consulta de movimientos' 
    else if(this.state.trx === 'AQRI') msg = 'Reimpresion de documentos'
    else msg = this.state.trx
    this.setState({ description: msg})
    console.log('_handleSubmit', this.state)
    this.props.onResult(this.state.trx)
    }

    render(){
        return(
            <nav className="navbar navbar-expand-lg nav-bank">
                <span className="navbar">                                    
                    <Title icon={true} label='My Bank App' />
                </span>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a className="nav-link nav-bank-link" href="https://www.google.com/">Link 1</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link nav-bank-link" href="https://www.google.com/">Link 2</a>
                        </li>
                    </ul>
                    <span>
                        <form className="form-inline my-2 my-lg-0" onSubmit={this._handleSubmit}>
                            <input className='form-control mr-sm-2' maxLength='4' size='4' type='text' onChange={this._handleOnChange} value={this.state.trx}/>                    
                            <svg onClick={this._handleSubmit} type='submit' className="bi bi-caret-right-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z"/>
                            </svg>                        
                        </form>                        
                    </span>    
                    <span> </span>
                    <span  className='mr-auto'>
                        <Title label={this.state.description} icon={false} size='h6'/>
                    </span>            
                    <span>
                        <LoginInfoPanel logged={this.props.logged} user={this.props.user}/>
                    </span>
                </div>            
            </nav>    


        )
    }
}