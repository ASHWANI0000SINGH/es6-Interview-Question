import React, { Component } from 'react'
import { connect } from 'react-redux'
import { buyBook } from '../redux/actions'

 class Book extends Component {
    // state={
    //     noOfBooks:50
    // }
    // buyBook=()=>{
    //     this.setState({noOfBooks:this.state.noOfBooks-1})
    // }
  render() {
    return (
      <div>Books

          <h1>Available{this.props.noOfBooks} </h1>
          <button onClick={this.props.buyBook}>buy book</button>
      </div>
    )
  }
}

const mapStateToProps=(state)=>{
  return{
noOfBooks:state.noOfBooks
  }
}

const mapDispatchToProps=(dispatch)=>{
  return{

    buyBook:()=>dispatch(buyBook())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Book); 