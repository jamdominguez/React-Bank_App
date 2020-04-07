import React, { PureComponent } from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import { Modal } from 'react-bootstrap'
import  LogoffPanel  from './LogoffPanel'
import  Title  from './Title'
import Welcome from '../img/Welcome.gif'


export default class NavigationPanel extends PureComponent {
    state = { trx: '', description: '', show: false}

    setShow = (show) => {
        this.setState({show})
    }
    _handleClose = () => this.setShow(false);
    _handleShow = () => this.setShow(true);

    _handleOnChange = (e) => {
        const trx = e.target.value.toUpperCase()
        this.setState( {trx} )
    }
    
    _handleSubmit = (e) => {
        e.preventDefault()        
        this.props.onResult(this.state.trx)
    }

    _renderLoadIcon = () => {
        if (this.props.load >= 100) {            
            return(
                <div>
                    
                    <img className='img-welcome img-welcome-nav' src={Welcome} alt='Welcome' onClick={this._handleShow}/>
                    
                </div>
            )
        }
    }

    _renderFakeInfo = () => {
        return(
            <table className="table table-bank">
                <thead className="nav-bank">
                    <tr>
                        <th scope="col" width='80%'>Dispositivo</th>
                        <th scope="col">Estado</th>                                             
                    </tr>
                </thead>
                <tbody>
                    <tr><td>Impresora</td><td className='device-ok'>
                        <svg className="bi bi-check-circle" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
                        <path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clipRule="evenodd"/>
                        </svg>                        
                    </td></tr>
                    <tr><td>Reciclador</td><td className='device-ok'>
                        <svg className="bi bi-check-circle" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
                        <path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clipRule="evenodd"/>
                        </svg>                        
                    </td></tr>
                    <tr disabled><td>Chequera</td><td className='device-ko'>
                        <svg className="bi bi-x-circle" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 15A7 7 0 108 1a7 7 0 000 14zm0 1A8 8 0 108 0a8 8 0 000 16z" clipRule="evenodd"/>
                        <path fillRule="evenodd" d="M11.854 4.146a.5.5 0 010 .708l-7 7a.5.5 0 01-.708-.708l7-7a.5.5 0 01.708 0z" clipRule="evenodd"/>
                        <path fillRule="evenodd" d="M4.146 4.146a.5.5 0 000 .708l7 7a.5.5 0 00.708-.708l-7-7a.5.5 0 00-.708 0z" clipRule="evenodd"/>
                        </svg>                        
                    </td></tr>
                    <tr><td>Signpad</td><td className='device-ok'>
                        <svg className="bi bi-check-circle" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M15.354 2.646a.5.5 0 010 .708l-7 7a.5.5 0 01-.708 0l-3-3a.5.5 0 11.708-.708L8 9.293l6.646-6.647a.5.5 0 01.708 0z" clipRule="evenodd"/>
                        <path fillRule="evenodd" d="M8 2.5A5.5 5.5 0 1013.5 8a.5.5 0 011 0 6.5 6.5 0 11-3.25-5.63.5.5 0 11-.5.865A5.472 5.472 0 008 2.5z" clipRule="evenodd"/>
                        </svg>                        
                    </td></tr>
                    
                </tbody>
            </table>            
        )
    }

    componentDidUpdate() {
        document.getElementById('trxInput').focus()    
    }

    render(){
            return(
                <div>
                <Navbar expand="lg" className='nav-bank'>                
                <Title icon={true} label='My Bank App'/>                
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav" className='nav-bank-collapse'>
                    <Nav>
                        <Nav.Link href="https://www.google.com/" className='nav-bank-link'>Portal</Nav.Link>
                        <Nav.Link href="https://www.google.com/" className='nav-bank-link'>Help</Nav.Link>
                    </Nav>
                    <span className='nav-margin'></span>
                    <form className="form-inline my-2 my-lg-0 mr-auto" onSubmit={this._handleSubmit}>
                        <input disabled={this.props.load < 100} id='trxInput' className='form-control mr-sm-2 input-nav' maxLength='4' size='4' type='text' onChange={this._handleOnChange} value={this.state.trx}/>                    
                        <svg onClick={this._handleSubmit} type='submit' className="bi bi-caret-right-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z"/>
                        </svg>  
                        <span className='nav-margin'> </span>                      
                        <Title label={this.props.description} icon={false} size='h6'/> 
                    </form>                    
                    {this._renderLoadIcon()}
                    <LogoffPanel user={this.props.user} onLogoff={this.props.onLogoff}/> 
                    </Navbar.Collapse>
                </Navbar>
                    <Modal show={this.state.show} onHide={this._handleClose} animation={false}>
                        <Modal.Header className='header-info' closeButton>
                        <Modal.Title>Informacion dispositivos: {this.props.user}</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            {this._renderFakeInfo()}
                        </Modal.Body>
                    </Modal>      
                </div>                
            )       
        
    }
}