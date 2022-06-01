import React, { Component } from 'react'
import LifeCycleMethod from './LifeCycleMethod'

export default class Parent extends Component {
    constructor(){
        super()
            this.state={
                show:true
            
        }
    }
  render() {
    return (
      <div>
          <h1> parent component</h1>
          {this.state.show? <LifeCycleMethod/>: <h1> child componnet deleted</h1>} 
      <button onClick={()=>this.setState({show:!this.state.show})}> Toggle</button>
      </div>
    )
  }
}
