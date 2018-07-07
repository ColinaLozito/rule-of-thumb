import React, { Component } from 'react';
import { connect } from 'react-redux'
import { getData, loadLocal, thumbUp, thumbDown} from '../actions/actionIndex'

import Pope from './Pope'
import Message from './Message'
import Votes from './Votes'
import AddName from './AddName'

class App extends Component {

  getLocalData(){
    const mydata = JSON.parse(localStorage.getItem('voteData'));
    if (mydata.length !== 0) {
      this.props.loadLocal(mydata)
    }else{
      this.props.getData();
    }
  }

  componentWillMount(){
    this.getLocalData();
  }

  render() {
    return (
      <div className="App">
        <Pope />
        <div className="container message-container">
          <Message />
        </div>
        <br />
        <div className="container">
          <div className="col-lg-12">
            <h2>
              Votes 
            </h2>          
          </div>
        </div>
        <br />
        <div className="container votes-main">
          <div className="col-lg-12">
            <Votes {...this.props}/>
          </div>
        </div>
        <div className="container add-name-div">
          <div className="col-lg-12">
            <AddName />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data.data
})

const mapDispatchToProps = dispatch => ({
 getData: () => dispatch(getData()),
 loadLocal: (localData) => dispatch(loadLocal(localData)),
 thumbUp: (index) => dispatch(thumbUp(index)),
 thumbDown: (index) => dispatch(thumbDown(index))
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
