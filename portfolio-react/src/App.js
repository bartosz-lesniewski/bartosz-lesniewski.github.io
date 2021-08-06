import React from 'react';
import './css/style.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Nav from './Nav';
import Work from './Work';
import About from './About';
import leaf from './img/leaf.png';
// import tree from './img/tree.png';
// import cloud from './img/cloud.png';

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
          <div className="main__nature">
            <img className="main__leaf" src={leaf}></img>
            {/* <img className="main__tree" src={tree}></img>
            <img
              className="main__clouds"
              ratioX="0.36"
              ratioY="0.32"
              src={cloud}
            ></img>
            <img
              className="main__clouds"
              ratioX="0.28"
              ratioY="0.22"
              src={cloud}
            ></img>
            <img
              className="main__clouds"
              ratioX="0.22"
              ratioY="0.46"
              src={cloud}
            ></img> */}
          </div>
        </main>
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
