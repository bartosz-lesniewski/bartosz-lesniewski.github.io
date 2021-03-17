import React from "react";
import "./styles/app.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Work from "./Work";
import About from "./About";

function App() {
	return (
		<Router>
			<div className="main-container">
				<header>
					<Nav />
				</header>
				<main>
					<Switch>
						<Route path="/" exact component={Home} />
						<Route path="/work" component={Work} />
						<Route path="/about" component={About} />
					</Switch>
				</main>
				<footer>
					<h3 className="h3-footer" title="site is under construction">
						site is under construction
					</h3>
				</footer>
			</div>
		</Router>
	);
}

const Home = () => (
	<div>
		<h1>Hi,</h1>
		<h2>my name is Bartosz Leśniewski</h2>
		<h3>and I am Junior Front-end Developer.</h3>
	</div>
);

export default App;
