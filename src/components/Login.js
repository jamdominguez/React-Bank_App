import React, {Component} from 'react'

export default class Login extends Component {
    state = { logged: false, user: '', error: false }
    
    // Simulate login validation
    _handleSubmit = (e) => {
        e.preventDefault()
        const user = document.getElementById('userId').value
        const isCorrect = user.length === 7        
        this.setState({ logged: isCorrect, user, error: !isCorrect })        
    }

    _handleChange = (e) => {
        this.setState( {error: false})
    }

    _renderError(){
    if(this.state.error) return (<small>El usuario <span className='errorMsg'>{this.state.user}</span> es <span className='errorMsg-danger'>incorrecto</span></small>)        
    }

    componentDidUpdate(prevProps, prevState) {            
        if (this.state.logged) this.props.onLogin(this.state)
    }

    render() {        
        return(
            <div className="card" style={{width: '18rem'}}>
                <div className="d-flex align-items-center justify-content-center p-3 py-5 mb-2 bg-light rounded img-login">
                    <svg className="bi bi-person-square" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M14 1H2a1 1 0 00-1 1v12a1 1 0 001 1h12a1 1 0 001-1V2a1 1 0 00-1-1zM2 0a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V2a2 2 0 00-2-2H2z" clipRule="evenodd"></path>
                        <path fillRule="evenodd" d="M2 15v-1c0-1 1-4 6-4s6 3 6 4v1H2zm6-6a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path>
                    </svg>                
                </div>
                <div className="card-body">
                    <form onSubmit={this._handleSubmit}>
                        {this._renderError()}
                        <input onChange={this._handleChange}id='userId' className="form-control input-login" type="text" maxLength='7' size='7' required/>
                        <button className="form-control btn btn-light input-login btn-bank">LOGIN</button>
                    </form>
                </div>
          </div>        
        )
    }
}