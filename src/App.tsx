import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Header from './components/layout/header/Header';
import About from './components/about/About';
import { Route, Switch } from 'react-router-dom';
import Connect from './components/connect/Connect';
import NotFound from './components/notFound/NotFound';
import Home from './components/home/Home';

class App extends React.Component<any> {
  public render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/connect" component={Connect} />
          <Route component={NotFound} />
        </Switch>
      </div>
    )
  }
}

export default App;
