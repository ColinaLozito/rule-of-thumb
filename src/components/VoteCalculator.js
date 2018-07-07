import React, { Component } from 'react';

class VoteCalculator extends Component {

	votePercentCalculator(tu, td){
		let total = tu+td;
		let thumbUpP = (tu*100)/total;
		let thumbDwP = (td*100)/total;

		return(
			<div className="container row">
				<div className="thumbUp-percent"
					style={{
						backgroundColor:'rgba(0, 153, 212, 0.62)',
						width: thumbUpP.toFixed(1)+'%'
					}}
				>
					<img src="/icons/thumbUp.png" alt="thumb-up" /><p>{thumbUpP.toFixed(1)}%</p>
				</div>
				<div className="thumbDown-percent">
					<p>{thumbDwP.toFixed(1)}%</p><img src="/icons/thumbDown.png" alt="thumb-down" />
				</div>
			</div>
		)
	}

	render(){
		return(
			<div className="row">
				{
					this.votePercentCalculator(this.props.i.thumbUp, this.props.i.thumbDown)
				}
			</div>
		)
	}

}

export default VoteCalculator