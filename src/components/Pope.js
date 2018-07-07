import React, { Component } from 'react';

class Pope extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {
				id: 0,
				name: 'Pope',
				content: 'content',
			},
			days: '' 
		};
	}

	componentDidMount(){
		this.fetchData()
		this.daysCalculator()
	}

	fetchData(){
		fetch('/data.json')
		.then(
			(response) => {
				if (response.status !== 200) {
					console.log('Looks like there was a problem. Status Code: ' + response.status);
					return;
				}
				response.json().then((data) => {
					// console.log(data.landing[0]);
					this.setState({
				      data: data.landing[0] 
				    });
				});
			}
		)
		.catch((err) => {
			console.log('Fetch Error :-S', err);
		});
	}

	daysCalculator(){
		var today=new Date();
		var enday = new Date(today.getFullYear(), 6, 30);
		if (today.getMonth()===11 && today.getDate()>25) 
		{
			enday.setFullYear(enday.getFullYear()+1); 
		}  
		var one_day=1000*60*60*24;
		var totalDays = Math.ceil((enday.getTime()-today.getTime())/(one_day))
		this.setState({
	      days: totalDays
	    });
	}

	render(){
		return(
			<div className="pope-landing col-lg-12">
				<div className="blur-box">
					<p>What's your opinion on</p>
					<p className="name">
						{this.state.data.name} ?
					</p>
					<p className="content">
						{this.state.data.content}
					</p>
					<p><a className="info" href="">More information</a></p>
					<p className="veredict">What's Your Veredict</p>
					<div className="thumb-box">
						<div className="thumb-up-btn">
							<img className="thumb-up-icon" alt="thumb-up" src="/icons/thumbUp.png"/>
						</div>
						<div className="thumb-down-btn">
							<img className="thumb-down-icon" alt="thumb-down" src="/icons/thumbDown.png"/>
						
						</div>
					</div>
				</div>
				<div className="left-days row">
					<div className="closing-text">
						<p>CLOSING IN</p>
					</div>
					<div className="days">
						<p>{this.state.days} days</p> 
					</div>
				</div>
			</div>
		)
	}
}

export default Pope;