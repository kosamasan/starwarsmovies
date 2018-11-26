import React, { Component } from 'react';
import MoviesMain from './containers/MoviesMain';
import Logo from './components/Logo/Logo'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <nav className="navbar navbar-inverse">
            <Logo />
          </nav>
        </header>
        <div className="container">
          <MoviesMain />
        </div>
        <footer className="footer navbar-fixed-bottom" style={{  }}>
          <div>&#169; Star Wars Movies</div>
        </footer>
      </div>
    );
  }
}

export default App;
