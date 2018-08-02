import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CodeMirror from 'codemirror';
import './common/js/codemirror/lib/codemirror.css'
// import './common/js/codemirror/mode/javascript/javascript'

class App extends Component {

  componentDidMount() {
    const codemirror = document.querySelector('.codemirror');
    console.log('CodeMirror', codemirror);
    const myCodeMirror = CodeMirror(codemirror, {
      value: "function myScript(){return 100;}\n",
      mode:  "javascript"
    });
  }

  render() {
    console.log(CodeMirror);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="codemirror">
          
        </div>
      </div>
    );
  }
}

export default App;
