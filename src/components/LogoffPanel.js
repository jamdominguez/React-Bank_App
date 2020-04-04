import React, {Component} from 'react'
import { Modal, Button } from 'react-bootstrap'

export default class LogoffPanel extends Component {
    state = {
        show : false
    }

    setShow = (show) => {
        this.setState({show})
    }

    render() {            
        const handleClose = () => this.setShow(false);
        const handleShow = () => this.setShow(true);        
                
            return(     
                <>
                    <Button className='btn-nav' variant='light' onClick={handleShow}>
                        <strong>{ this.props.user}</strong>             
                        <svg className="bi bi-power" width="3em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" d="M5.578 4.437a5 5 0 104.922.044l.5-.866a6 6 0 11-5.908-.053l.486.875z" clipRule="evenodd"/>
                            <path fillRule="evenodd" d="M7.5 8V1h1v7h-1z" clipRule="evenodd"/>
                        </svg>                        
                    </Button>                    
                    <Modal show={this.state.show} onHide={handleClose} animation={false}>
                        <Modal.Header className='nav-bank-danger' closeButton>
                        <Modal.Title>¿Seguro que quiere desconectar?</Modal.Title>
                        </Modal.Header>                        
                        <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onLogoff}>
                            <strong>Si, seguro</strong>
                        </Button>
                        </Modal.Footer>
                    </Modal>   
                </>                                 
            )
    }
    
}
LogoffPanel.defaultProps = {  
  userName : ''
}