import React from 'react';
import './css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Work from './Work';
import About from './About';

function App() {
  return (
    <Router>
      <div className="main">
        <header className="main__header header">
          <Nav />
        </header>
        <main className="main__content">
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/work" component={Work} />
            <Route path="/about" component={About} />
          </Switch>
        </main>
        {/* <footer className="main__footer footer">
          <h3 className="footer__h3" title="site is under construction">
            site is under construction
          </h3>
        </footer> */}
      </div>
    </Router>
  );
}

const Home = () => (
  <div className="home">
    <h1 className="home__h1">Hi,</h1>
    <h2 className="home__h2">my name is Bartosz Leśniewski</h2>
    <h3 className="home__h3">and I am Junior Front-end Developer.</h3>
  </div>
);

export default App;
