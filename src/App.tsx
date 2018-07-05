import * as React from 'react';
import './App.css';

import logo from './logo.svg';

let randomnr:string = ''

const makeid = ():string => {
  let text = "";
  const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (let i = 0; i < 5; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

const createRandomString = ():string => {
  const nwstring = setTimeout(() => {
      randomnr = makeid()
      createRandomString()
      return randomnr;
  }, 5000);
}

class App extends React.Component {
  public render() {
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h1>{createRandomString()}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>;
  }
}

export default App;
