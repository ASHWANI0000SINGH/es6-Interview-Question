import React, { Component } from 'react'
  
export default class child extends Component {
    

    constructor(props){
      super(props);
      this.state={
          count:0
      }
  }
  
    incCount(){
      this.setState({
        count:this.state.count+1
      })
    }
    decCount(){
      this.setState({
        count:this.state.count-1
      })
    }
  render() {
    return (
      <div>
        <button onClick={()=>this.incCount()}>+</button>
        <input type="number" name="" id="" value={this.state.count} />
        <button onClick={()=>this.decCount()}>-</button>




      </div>
    )
  }
}
