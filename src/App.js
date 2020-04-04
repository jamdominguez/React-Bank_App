import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WorkSpace from './components/WorkSpace';
import NavigationPanel from './components/NavigationPanel';
import Login from './components/Login'

const INIT_STATE = {trx : '', logged: false, user: 'Me', load: 0, loadLabel: ''}

class App extends Component {
  state = INIT_STATE

  _getTrx = (trx) => {
    this.setState( {trx} )
  }

  _checkLogin = (state) => {
    const { logged, user} = state
    this.setState({ logged, user })    
  }

  _handleLogoff = () => {
      this.setState(INIT_STATE)
  }

  // Simulate load
  componentDidUpdate = () => {
    if (this.state.logged) {
      const timer = setTimeout(()=>{
        const increment = Math.trunc(Math.random()*10)
        const currentLoad = this.state.load
        let msg;
        if(currentLoad < 33) {
          msg = 'Tomando asiento'
        } else if (33 <= currentLoad && currentLoad < 66) {
          msg = 'Calentando motores'
        } else {
          msg = 'Despegando'
        }
        this.setState({ load: this.state.load + increment, loadLabel: msg})
      }, 150)
      if (this.state.load > 100) clearTimeout(timer)
    
    }
  }

  _renderLogged = () => {    
    const { load, loadLabel } = this.state
    
    if (load <= 100) {
      const progressInstance = <ProgressBar now={load} label={`${loadLabel}`}/>
      return(
        <div className="App">          
          <header className="">
            <NavigationPanel onResult={this._getTrx} logged={this.state.logged} user={this.state.user} onLogoff={this._handleLogoff} load={this.state.load}/>
          </header>
            {progressInstance}
            <WorkSpace trx={this.state.trx} load={this.state.load}/>             
        </div>        
      ) 
    }
    return(
        <div className="App">          
          <header className="">
            <NavigationPanel onResult={this._getTrx} logged={this.state.logged} user={this.state.user} onLogoff={this._handleLogoff} load={this.state.load}/>
          </header>
            <WorkSpace trx={this.state.trx} load={this.state.load}/>        
        </div>
    )
  }

  _renderUnlogged = () => {
      return(
        <div className="App" align="center"><Login onLogin={this._checkLogin}/></div>        
      )
  }

  
  render() {    
      return this.state.logged ? this._renderLogged() : this._renderUnlogged()
    }  
}

export default App;
