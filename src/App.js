import React, { Component } from 'react';
import { connect } from 'react-redux';
import { toggleVectAction, toggleMesureAction } from './actions/toolbarActions'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ...state
 })
 const mapDispatchToProps = dispatch => ({
  toggleVectAction: () => dispatch(toggleVectAction),
  toggleMesureAction: () => dispatch(toggleMesureAction),
 })

export default connect(mapStateToProps, mapDispatchToProps)(App);
