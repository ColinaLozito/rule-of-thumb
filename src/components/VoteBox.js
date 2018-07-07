import React, { Component } from 'react';

import ThumbRankComponent from './ThumbRankComponent'
import VoteCalculator from './VoteCalculator'

class VoteBox extends Component {

	constructor(props){
		super(props)
		this.state = {
			vote_checker: 0
		} 
	}

	saveInLocal(){

		if (this.props.data.length !== 0 && this.props.data !== undefined){
			let myarr = JSON.stringify(this.props.data)
			//console.log(myarr)
			localStorage.setItem('voteData', myarr);
		}
	}

	voteBox(){

		if (this.state.vote_checker === 0) {
			return(
				<div>
					<form onSubmit={this.handleSumbit.bind(this)}>
						<div className="thumb-up">
							<label>
								<input type="radio" name="vote" ref="vote1" value={this.props.p} />
								<div><img src="/icons/thumbUp.png" alt="thumb-up" /></div>
							</label>
						</div>
						<div className="thumb-down">
							<label>
								<input type="radio" name="vote" ref="vote2" value={this.props.p} />
								<div><img src="/icons/thumbDown.png" alt="thumb-down" /></div>
							</label>
						</div>
						<div className="vote-now">
							<button type="submit" className="btn btn-default">Vote Now</button>
						</div>
					</form>
				</div>
			)
		}
		if (this.state.vote_checker === 1) {
			return(
				<div>
					<form>
						<div className="thumb-up">
							<p>Thanks for voting</p>
						</div>
						<div className="vote-now">
							<button className="btn btn-default" onClick={this.handleVoteAgain.bind(this)}>Vote Again</button>
						</div>
					</form>
				</div>
			)
		}
	}

	handleVoteAgain(e){
		e.preventDefault()
		this.setState({
			vote_checker: 0
		})
	}

	handleSumbit(e){
		e.preventDefault()
		const vote1 =  this.refs.vote1.checked;
		const vote2 =  this.refs.vote2.checked;
		const index =  this.refs.vote1.value;
		if (vote1===true) {
			this.props.thumbUp(index)
		}
		if (vote2===true) {
			this.props.thumbDown(index)
		}
		this.setState({
			vote_checker: 1
		})

		this.saveInLocal();

	}

	render(){
		return(
			
			<div className="col-lg-12 vote-box"	
			style={{
				backgroundImage: 'url(/images/'+this.props.i.img+'.png)',
				backgroundRepeat: 'no-repeat',
   				backgroundPosition: 'left',
   				backgroundSize: 'cover'
			}}>
				<div className="row vote-container">
					<ThumbRankComponent {...this.props} />
					<div className="col-lg-12 name">
						<h2>
							{this.props.i.name}
						</h2>
					</div>
					<div className="col-lg-12 category">
						<p>
							<strong>1 month ago in </strong>{this.props.i.category}
						</p>
					</div>
					<div className="col-lg-12 content">
						<p>
							{this.props.i.content}
						</p>
					</div>
					<div className="col-lg-12 buttons-box">
						{this.voteBox()}
					</div>
					<div className="col-lg-12 votes-percent">

						<VoteCalculator {...this.props} />
						
					</div>
				</div>
			</div>
		)
	}


}

export default VoteBox