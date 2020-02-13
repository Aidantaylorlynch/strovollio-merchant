import React, { Component } from 'react';
import { OrderContainer } from './components/OrderContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.scss';
import { LoginContainer } from './components/loginContainer';
import { OrderDetailsContainer } from './components/OrderDetailsContainer';

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
					<Route path="/orderdetails">
						<OrderDetailsContainer />
					</Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;
