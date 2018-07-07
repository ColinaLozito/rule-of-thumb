import React, { Component } from 'react'

import VoteBox from './VoteBox'


class Votes extends Component {

	render(){
		return(
			<div className="votes-content row">
				{
					this.props.data.map((i, p) => {
						return(
							<div key={p} className="col-lg-6">
								<VoteBox i={i} p={p} {...this.props} />
							</div>
						)
					})
				}			
			</div>
		)
	}

}




export default Votes;

