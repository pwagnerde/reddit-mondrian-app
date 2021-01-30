import React from 'react';
import './App.css';
import Home from './Home/Home';
import Header from './Header/Header';
import Footer from './Footer/Footer'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <React.Fragment>
                  <Home />
              </React.Fragment>
            )}
          />
          <Redirect to="/" />
        </Switch>
      </div>
      <Footer />
    </Router>
  )
}

export default App;
