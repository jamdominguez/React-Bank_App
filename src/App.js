import React, { Component } from 'react';
import { ProgressBar } from 'react-bootstrap'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WorkSpace from './components/WorkSpace';
import NavigationPanel from './components/NavigationPanel';
import Login from './components/Login'

const INIT_STATE = {trx : '', logged: false, user: 'Me', load: 0, loadLabel: '', trxDescription:''}

class App extends Component {
  state = INIT_STATE

  _getTrx = (operationNode) => {    
    this.setState( {trx: operationNode.trx, trxDescription: operationNode.description} )
  }

  _checkLogin = (state) => {
    const { logged, user} = state
    this.setState({ logged, user })    
  }

  _handleLogoff = () => {
      this.setState(INIT_STATE)
  }

  _handleResult = (trx) => {
    this.setState({ trx })
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
      }, 50)
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
            <NavigationPanel logged={this.state.logged} user={this.state.user} onLogoff={this._handleLogoff} load={this.state.load}/>
          </header>
            {progressInstance}
            <WorkSpace trx={this.state.trx} load={this.state.load} onDataTrxLoad={this._getTrx}/>             
        </div>        
      ) 
    }
    return(
        <div className="App">          
          <header className="">
            <NavigationPanel onResult={this._handleResult} logged={this.state.logged} user={this.state.user} onLogoff={this._handleLogoff} load={this.state.load} description={this.state.trxDescription}/>
          </header>
            <WorkSpace trx={this.state.trx} load={this.state.load} onDataTrxLoad={this._getTrx}/>        
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
