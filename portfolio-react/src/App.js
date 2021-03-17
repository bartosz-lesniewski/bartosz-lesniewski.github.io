import "./styles/app.css";
import { BrowseRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";

function App() {
	return (
		<div className="main-container">
			<header>
				<Nav />
			</header>
			<main>
				<h3>and I am Junior Front-end Developer.</h3>
				<h2>my name is Bartosz Leśniewski</h2>
				<h1>Hi,</h1>
			</main>
			<footer>
				<h3 className="h3-footer" title="site is under construction">
					site is under construction
				</h3>
			</footer>
		</div>
	);
}

export default App;
