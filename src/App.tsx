import './App.css';
import * as React from 'react';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import About from './components/about/About';
import { Route, Switch } from 'react-router-dom';
import Connect from './components/connect/Connect';
import NotFound from './components/notFound/NotFound';
import Home from './components/home/Home';
import { Container, ThemeProvider } from '@material-ui/core';
import theme from './theme'
import DocumentMeta from 'react-document-meta';

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
