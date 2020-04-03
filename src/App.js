import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import WorkSpace from './components/WorkSpace';
import NavigationPanel from './components/NavigationPanel';

class App extends Component {
  state = {trx : '', logged: true, user: 'Me' }

  _getTrx = (trx) => {
    this.setState( {trx} )
  }

  _isLogged = () => {
    return this.state.logged
  }
  
  render() {
      return(
        <div className="App">
          <header className="">
            <NavigationPanel onResult={this._getTrx} logged={this.state.logged} user={this.state.user}/>
          </header>
            <WorkSpace trx={this.state.trx} />        
        </div>
      )
  }
}

export default App;
