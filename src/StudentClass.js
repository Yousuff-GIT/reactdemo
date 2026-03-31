// Import React and Component class
import React, { Component } from "react";

// Class Component
class StudentClass extends Component {
  render() {
    return (
      <div style={{ border: "1px solid blue", padding: "10px", margin: "10px" }}>
        {/* Heading for class component */}
        <h2>Class Component</h2>

        {/* Student details */}
        <p>Name: Priya</p>
        <p>Department: IT</p>
        <p>Year: 3rd Year</p>
      </div>
    );
  }
}

// Export the component
export default StudentClass;