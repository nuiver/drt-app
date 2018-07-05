import * as React from 'react';
import './App.css';

import logo from './logo.svg';


interface IState {
  statestring: string;
}

class App extends React.Component<any, IState> {

  public static defaultProps: Partial<any> = {
    randomstring: 'START',
  };

  constructor(props: any) {
    super(props);
    this.state = { statestring: 'FINISH' };
  }

  public componentWillMount() {
    this.createRandomString()
  }

  public render() {
    const { statestring } = this.state;
    return <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <h1>{statestring}</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.tsx</code> and save to reload.
        </p>
      </div>;
  }

  private makeid = ():string => {
    let text = "";
    const possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (let i = 0; i < 5; i++) {
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
  }

  private createRandomString = ():string => {
    setTimeout(() => {
      this.setState({ statestring : this.createRandomString() });
    }, 5000);
    return this.makeid();
  };
}

export default App;
