import React, { Component } from 'react';

class Message extends Component {

	constructor(props) {
		super(props);
		this.state = {
			message: {
				statement1: 'Speak out, Be Heart.',
				statement2: 'Be counted',
				message: 'Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It’s easy: You share your opinion, we analyze and put the data in a public report.'
			} 
		}
	}

		render(){
			return(
				<div className="message-box col-lg-12">
					<div className="content row">	
						<div className="statement col-md-12 col-lg-3">
							<p className="statement-1">
								{this.state.message.statement1}
							</p>
							<p className="statement-2">
								<strong>{this.state.message.statement2}</strong>
							</p>
						</div>
						<div className="message col-md-12 col-lg-8">
							<p>
								{this.state.message.message}
							</p>
						</div>
						<div className="close col-lg-1">
							<a><img src="/icons/ex.png" alt="x"/></a>
						</div>
					</div>
				</div>
			)
		}
}

export default Message