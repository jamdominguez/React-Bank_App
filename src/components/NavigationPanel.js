import React, { PureComponent } from 'react'
import { Navbar, Nav} from 'react-bootstrap'
import  LogoffPanel  from './LogoffPanel'
import  Title  from './Title'


export default class NavigationPanel extends PureComponent {
    state = { trx: '', description: '' }

    _handleOnChange = (e) => {
    this.setState({ trx: e.target.value})    
    }

    // Simulate trx
    _handleSubmit = (e) => {
    e.preventDefault()
    let msg = ''
    if(this.state.trx.toUpperCase() === 'TLMV') msg = 'Consulta de movimientos' 
    else if(this.state.trx.toUpperCase() === 'AQRI') msg = 'Reimpresion de documentos'
    else msg = this.state.trx
    this.setState({ description: msg})
    console.log('_handleSubmit', this.state)
    this.props.onResult(this.state.trx)
    }

    render(){    
            return(
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
                        <input className='form-control mr-sm-2' maxLength='4' size='4' type='text' onChange={this._handleOnChange} value={this.state.trx}/>                    
                        <svg onClick={this._handleSubmit} type='submit' className="bi bi-caret-right-fill" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.14 8.753l-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 011.659-.753l5.48 4.796a1 1 0 010 1.506z"/>
                        </svg>  
                        <span className='nav-margin'> </span>                      
                        <Title label={this.state.description} icon={false} size='h6'/> 
                    </form>
                    <LogoffPanel user={this.props.user} onLogoff={this.props.onLogoff}/> 
                </Navbar.Collapse>
                </Navbar>     
            )       
        
    }
}