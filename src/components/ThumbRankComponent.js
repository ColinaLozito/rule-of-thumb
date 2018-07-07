import React, { Component } from 'react';

class ThumbRankComponent extends Component {

	thumbRank(tu, td){
		if (tu > td) {
			return(
				<div className="thumb-up">
					<img src="/icons/thumbUp.png" alt="thumb-up" />
				</div>
			)
		}

		if (td > tu) {
			return(
				<div className="thumb-down">
					<img src="/icons/thumbDown.png" alt="thumb-down" />
				</div>
			)
		}
	}

	render(){
		return(

			<div className="thumb-rank">
			 {
			 	this.thumbRank(this.props.i.thumbUp, this.props.i.thumbDown)
			 }
			</div>

		)
	}

}

export default ThumbRankComponent