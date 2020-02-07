import React, { Component } from 'react';
import { OrderContainer } from './components/OrderContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';

export class App extends Component {
	render() {
		return (
			<BrowserRouter>
				<Switch>
					<Route exact path="/">
						<OrderContainer />
					</Route>
				</Switch>
			</BrowserRouter>
		)
	}
}

export default App;
