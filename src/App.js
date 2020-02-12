import React, { Component } from 'react';
import { OrderContainer } from './components/OrderContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import { LoginContainer } from './components/loginContainer';

export class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<LoginContainer />
					</Route>
					<Route path="/orders">
						<OrderContainer />
					</Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;
