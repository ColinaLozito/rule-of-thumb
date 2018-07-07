import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import configureStore from './store';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

// bootstrap and jquery
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/jquery/dist/jquery.min.js'
import 'popper.js'
import './styles/scss/app.css'

// components
import App from './components/App'
import Header from './components/Header'
import error404 from './components/404'
import Footer from './components/Footer'
import Login from './components/Login'
import HowWorks from './components/HowWorks'
import Trials from './components/Trials'


import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
	<Provider store={configureStore()}>
		<div className="main-container">
			<Header />
			<BrowserRouter>
				<Switch>
					<Route exact path='/' component={App}/>
					<Route path='/login' component={Login}/>
					<Route path='/howitworks' component={HowWorks}/>
					<Route path='/pastTrials' component={Trials}/>
					<Route path='*' component={error404}/>
				</Switch>
			</BrowserRouter>
			<Footer />
		</div>
	</Provider>,
document.getElementById('root'));

registerServiceWorker();
