import React, { Component } from "react";

class StudentAPI extends Component {
  constructor(props) {
    super(props);

    this.state = {
      marks: 75
    };
  }

  increaseMarks = () => {
    this.setState({
      marks: this.state.marks + 5
    });
  };

  render() {
    return (
      <div style={{ border: "1px solid black", padding: "15px", marginTop: "20px" }}>
        <h2>React Component API Demo</h2>
        <p><b>Name:</b> {this.props.name}</p>
        <p><b>Marks:</b> {this.state.marks}</p>
        <button onClick={this.increaseMarks}>Increase Marks</button>
      </div>
    );
  }
}

export default StudentAPI;