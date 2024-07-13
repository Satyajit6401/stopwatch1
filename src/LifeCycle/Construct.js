//Mounting
import React, { Component } from 'react'

class Construct extends Component {
    constructor(props) {
        super(props);
        this.state = {favcolor: "blue"};
    }
    // static getDerivedStateFromProps(props,state) {
    //     return {favcolor: props.favcol};
    // }
    componentDidMount() {
        setTimeout( () =>{
            this.setState({favcolor: "green"})
        },3000)
    }
  render() {
    return (
      <h1 className='text-center mt-4'>My Favourite Color is {this.state.favcolor}</h1>
    );
  }
}

export default Construct;