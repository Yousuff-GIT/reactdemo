import React, { useState } from "react"; 
	// Imports React and useState hook
	// useState is used to create and update state in a functional component
	
	// Defines the Appointments page component
	function Appointments() {
		// Creates a state variable named appointmentCount
		// Initial value is 3
		const [appointmentCount, setAppointmentCount] = useState(3);
		
		// Creates another state variable named status
		// Initial value is "Open"
		const [status, setStatus] = useState("Open");
		
		// Function used to increase appointment count by 1
		const bookAppointment = () => {
			setAppointmentCount(appointmentCount + 1);
			// Updates the appointmentCount state
		};
		
		// Function used to change appointment booking status
		const toggleStatus = () => {
			setStatus(status === "Open" ? "Closed" : "Open");
			// If current status is Open, changes it to Closed
			// Otherwise changes it back to Open
		};
		
		// Inline style object for the card container
		const cardStyle = {
			backgroundColor: "white",        
			// Sets card background color
			
			padding: "20px",                 
			// Adds spacing inside the card
			
			borderRadius: "10px",            
			// Rounds the corners
			
			boxShadow: "0 2px 6px rgba(0,0,0,0.1)" 
			// Adds shadow effect
		};
		
		// Inline style object for status text
		const statusStyle = {
			color: status === "Open" ? "green" : "red",
			// Displays green color when status is Open
			// Displays red color when status is Closed
			
			fontWeight: "bold"
			// Makes the status text bold
		};
		
		// Returns the user interface for the Appointments page
		return (
		<div style={cardStyle}>
		{/* Card container */}
		
		<h2>Appointments Page</h2>
		{/* Displays page heading */}
		
		<p><b>Total Booked Appointments:</b> {appointmentCount}</p>
		{/* Displays the current appointment count */}
		
		<p><b>Booking Status:</b> <span style={statusStyle}>{status}</span></p>
		{/* Displays current booking status with conditional styling */}
		
		<button onClick={bookAppointment} style={{ marginRight: "10px" }}>
		Book Appointment
		</button>
		{/* When clicked, increases the appointment count */}
		
		<button onClick={toggleStatus}>
		Change Status
		</button>
		{/* When clicked, changes the booking status */}
		</div>
		);
	}
	
	// Exports the Appointments component
	export default Appointments;