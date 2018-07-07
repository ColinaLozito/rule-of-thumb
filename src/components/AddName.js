import React, { Component } from 'react';

class AddName extends Component {

	render(){
		return(
			<div className="row">
				<div className="col-lg-12 add-name">
					<div className="content row">
						<div className="col-lg-12">
							<div className="text">
								<p>Is there anyone else you would want us to add?</p>
							</div>
							<div className="button">
								<a className="btn btn-default">
									Submit a Name
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}

}

export default AddName