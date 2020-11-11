import logo from './logo.svg';
import './App.css';
import * as React from 'react';
import Header from './components/layout/header/Header';
import AboutPage from './components/about/About';
import { Route, Switch } from 'react-router-dom';

class App extends React.Component<any> {
  public render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          {/* <Route exact path="/" component={HomePage} /> */}
          <Route exact path="/about" component={AboutPage} />
          {/* <Route path="/courses" component={CoursesPage} /> */}
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </div>
    )
  }
}

export default App;
