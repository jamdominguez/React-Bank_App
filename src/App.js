import React, { Component } from 'react';
import './App.css';
import WorkSpace from './components/WorkSpace';
import NavigationPanel from './components/NavigationPanel';

class App extends Component {
  state = {trx : '', logged: true, userName_: 'Random User' }

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
            <NavigationPanel onResult={this._getTrx} logged={this.state.logged} userName={this.state.userName_}/>
          </header>
            <WorkSpace trx={this.state.trx} />        
        </div>
      )
  }
}

export default App;
