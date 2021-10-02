import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./component/Main";
import Favourtie from "./component/Favourtie";
import Header from "./component/Header";
export class App extends Component {
	render() {
		return (
			<Router>
				<Header />
				<Switch>
					<Route exact path="/">
						<Main />
					</Route>
					<Route exact path="/favourite">
						<Favourtie />
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
