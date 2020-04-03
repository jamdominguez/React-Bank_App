import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WorkSpace from './components/WorkSpace';
import NavigationPanel from './components/NavigationPanel';
import Login from './components/Login'

class App extends Component {
  state = {trx : '', logged: false, user: 'Me' }

  _getTrx = (trx) => {
    this.setState( {trx} )
  }

  _checkLogin = (state) => {
    const { logged, user} = state
    this.setState({ logged, user })    
  }

  _renderLogged = () => {
    console.log(this.state)
    return(
        <div className="App">          
          <header className="">
            <NavigationPanel onResult={this._getTrx} logged={this.state.logged} user={this.state.user}/>
          </header>
            <WorkSpace trx={this.state.trx} />        
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
