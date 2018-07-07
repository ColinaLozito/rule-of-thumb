import React, { Component } from 'react';

class Footer extends Component {

	render(){
		return(
			<div className="footer">
				<div className="tems-links">
					<ul>
						<li><a>Terms and Conditions</a></li>
						<li><a>Privacy Policy</a></li>
						<li><a>Contact Us</a></li>
					</ul>
				</div>
				<div className="links">
					<ul>
						<li><p>Fallow Us</p></li>
						<li className="fb"><img src="/icons/fb.png" alt="fb"/></li>
						<li className="twrt"><img src="/icons/twtr.png" alt="twtr"/></li>
					</ul>
				</div>
			</div>
		)
	}

}

export default Footer