import * as React from 'react';
import './App.css';
import './styles/css/global.css';

// import '@blueprintjs/core/lib/css/blueprint.css'
import '@blueprintjs/icons/lib/css/blueprint-icons.css'
import 'normalize.css/normalize.css'

import { AnchorButton, Button } from '@blueprintjs/core';
import { BrowserRouter, Link, Route } from "react-router-dom";
import asyncComponent from './components/async';
import logo from './logo.svg';

const AAsync = asyncComponent(() => import('./components/a'));
const BAsync = asyncComponent(() => import('./components/b'));

class App extends React.Component {
  public render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <Button intent='success'>Regular Button</Button>
          <Button intent='success' className='bp3-skeleton'>Regular Button</Button>
          <AnchorButton intent='primary'>Anchor Button</AnchorButton>
          <Link to='/a'>A</Link>
          <Link to='/b'>B</Link>
          <Route path='/a' component={AAsync} />
          <Route path='/b' component={BAsync} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
