import React, { Component } from "react"; // Imports React and Component class

// Class component representing the status of a meeting room
class MeetingRoomCard extends Component {
  // Constructor is used to initialize props and state
  constructor(props) {
    super(props); // Enables access to props inside the class component

    // State stores dynamic room information
    this.state = {
      bookingStatus: "Available", // Initial booking status
      cleaningStatus: "Clean", // Initial cleaning status
      peopleCount: 0 // Initial number of people in the room
    };
  }

  // Method to simulate room booking
  bookRoom = () => {
    this.setState({
      bookingStatus: "Booked"
    });
  };

  // Method to simulate room release
  releaseRoom = () => {
    this.setState({
      bookingStatus: "Available",
      peopleCount: 0
    });
  };

  // Method to simulate people entering the room
  addPerson = () => {
    this.setState({
      peopleCount: this.state.peopleCount + 1
    });
  };

  // Method to simulate room cleaning requirement
  markForCleaning = () => {
    this.setState({
      cleaningStatus: "Needs Cleaning"
    });
  };

  // Method to mark the room as cleaned
  cleanRoom = () => {
    this.setState({
      cleaningStatus: "Clean"
    });
  };

  // render() displays the room information and control buttons
  render() {
    return (
      <div style={{ border: "2px solid black", padding: "15px", marginTop: "20px", width: "350px" }}>
        {/* Displays the room name received from props */}
        <h2>Room: {this.props.roomName}</h2>

        {/* Displays the floor received from props */}
        <p><b>Floor:</b> {this.props.floor}</p>

        {/* Displays the seating capacity received from props */}
        <p><b>Capacity:</b> {this.props.capacity}</p>

        {/* Displays the current booking status from state */}
        <p><b>Booking Status:</b> {this.state.bookingStatus}</p>

        {/* Displays the current cleaning status from state */}
        <p><b>Cleaning Status:</b> {this.state.cleaningStatus}</p>

        {/* Displays the current number of people in the room */}
        <p><b>People Inside:</b> {this.state.peopleCount}</p>

        {/* Button to book the room */}
        <button onClick={this.bookRoom}>Book Room</button>

        {/* Button to release the room */}
        <button onClick={this.releaseRoom} style={{ marginLeft: "10px" }}>
          Release Room
        </button>

        <br /><br />

        {/* Button to increase number of people in the room */}
        <button onClick={this.addPerson}>Add Person</button>

        <br /><br />

        {/* Button to mark room for cleaning */}
        <button onClick={this.markForCleaning}>Mark for Cleaning</button>

        {/* Button to mark room as cleaned */}
        <button onClick={this.cleanRoom} style={{ marginLeft: "10px" }}>
          Clean Room
        </button>
      </div>
    );
  }
}

// Exports the component so it can be used in App.js
export default MeetingRoomCard;