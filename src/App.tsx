import { Container, ThemeProvider } from '@material-ui/core';
import * as React from 'react';
import DocumentMeta from 'react-document-meta';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import About from './components/about/About';
import Connect from './components/connect/Connect';
import Home from './components/home/Home';
import Footer from './components/layout/footer/Footer';
import Header from './components/layout/header/Header';
import NotFound from './components/notFound/NotFound';
import theme from './theme';

class App extends React.Component<any> {
  public render() {
    const meta = {
      title: 'Alexa Snyder',
      description: 'Personal page the heck of it',
      meta: {
        charset: 'utf-8',
        name: {
          keywords: 'Alexa,Snyder,AlexaSnyder,Rarick,AlexaRarick,Software,Engineer,Developer'
        }
      }
    }
    return (
      <DocumentMeta {...meta}>
        <div className="App">
          <ThemeProvider theme={theme}>
            <Header />
            <Container>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/connect" component={Connect} />
                <Route component={NotFound} />
              </Switch>
            </Container>
            <Footer />
          </ThemeProvider>
        </div>
      </DocumentMeta>
      
    )
  }
}

export default App;
