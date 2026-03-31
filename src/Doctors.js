	import React from "react"; 
	// Imports the React library
	
	// Defines the Doctors page component
	function Doctors() {
		// Creates an array of sample doctor data
		// Each object represents one doctor
		const doctors = [
		{ id: 1, name: "Dr. Anitha Rao", specialization: "Cardiology" },
		{ id: 2, name: "Dr. K. Raman", specialization: "Orthopaedics" },
		{ id: 3, name: "Dr. Meera Joseph", specialization: "Dermatology" }
		];
		
		// Inline style object for the card container
		const cardStyle = {
			backgroundColor: "white",        
			// Sets white background
			
			padding: "20px",                 
			// Adds spacing inside the card
			
			borderRadius: "10px",            
			// Rounds the corners
			
			boxShadow: "0 2px 6px rgba(0,0,0,0.1)" 
			// Adds a shadow effect
		};
		
		// Returns the user interface for the Doctors page
		return (
		<div style={cardStyle}>
		{/* Card container */}
		
		<h2>Doctors Page</h2>
		{/* Displays the page heading */}
		
		{doctors.map((doctor) => (
			// map() is used to display each doctor from the array
			// key helps React identify each item uniquely
			<div key={doctor.id} style={{ marginBottom: "10px" }}>
			{/* Container for each doctor's details */}
			
			<p><b>Name:</b> {doctor.name}</p>
			{/* Displays doctor name */}
			
			<p><b>Specialization:</b> {doctor.specialization}</p>
			{/* Displays doctor specialization */}
			
			<hr />
			{/* Adds a horizontal line between doctor entries */}
			</div>
			))}
		</div>
		);
	}
	
	// Exports the Doctors component
	export default Doctors;