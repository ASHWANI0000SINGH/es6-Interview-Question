import React, { Component } from 'react'

export default class LifeCycleMethod extends Component {
    constructor(){
        super()
        console.log("constructor called ")
        this.state={
name:"ashwani"
        }
    }
    componentDidMount(){
      console.log(" componentDidMount called");

    }
    componentDidUpdate(){
      console.log(" componentDidUpdate called");

    }
    componentWillUnmount(){
        console.log("componentWillUnmount deleted")
    }
  render() {
      console.log(" render called");
    return (
      <div>component did mount {this.state.name}
      <button  onClick={()=>this.setState({name:"ashwani kumar singh"})}>update name</button>
      </div>
    )
  }
}
