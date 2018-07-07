import React, { Component } from 'react';

class Header extends Component {

	render(){
		return(
			<nav className="main-nav navbar navbar-expand-lg navbar-light col-lg-12">
				<a href="/" className="navbar-brand">Rule of Thumb</a>
				<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>

				<div className="collapse navbar-collapse" id="navbarSupportedContent">
					<ul className="navbar-nav mr-auto">
						<li className="nav-item active">
							<a href="/pastTrials" className="nav-link">Past Trials <span className="sr-only">(current)</span></a>
						</li>
						<li className="nav-item">
							<a href="/howitworks" className="nav-link">How it Works</a>
						</li>
						<li className="nav-item">
							<a href="/login" className="nav-link ">Log in / Sing Up</a>
						</li>
						<li className="nav-item">
							<a href="/" className="nav-link ">
								<img src="/icons/search.png" alt="search"/>
							</a>
						</li>
					</ul>
				</div>
			</nav>
		)
	}

}

export default Header