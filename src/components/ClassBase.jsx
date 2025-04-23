//create class based component
import React, { Component } from "react";

export default class ClassBase extends Component {
  constructor(props) {
    //constructor initialization phase
    super(props);
    this.state = {
      count: 1,
    };
  }
  // mounting  phase
  componentDidMount() {
    console.log("Component mounted");
  }
  // updating phase
  componentDidUpdate() {
    console.log("Component updated");
  }
  // unmounting phase
  componentWillUnmount() {
    console.log("Component unmounted");
  }

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click me!
        </button>
        <p>Count: {this.state.count}</p>
      </div>
    );
  }
}
