import React, { Component } from 'react'

class Updating extends Component {
    constructor(props){
        super(props);
        this.state = {favcolor: "red"};
    }
    static getDerivedStateFromProps(props,state) {
        return {favcolor: props.favcol};
    }
    changeColor = () => {
        this.setState({favcolor: "blue"});
    }
  render() {
    return (
      <div className='text-center mt-5'>
        <h1>My favourite Color is {this.state.favcolor}</h1>
        <button type='button' onClick={this.changeColor}>Change</button>
      </div>
    )
  }
}

export default Updating