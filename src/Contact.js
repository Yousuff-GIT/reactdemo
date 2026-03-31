	import React from "react"; 
	// Imports the React library
	
	// Defines the Contact page component
	function Contact() {
		// Inline style object for the card container
		const cardStyle = {
			backgroundColor: "white",        
			// Sets white background color
			
			padding: "20px",                 
			// Adds spacing inside the card
			
			borderRadius: "10px",            
			// Rounds the card corners
			
			boxShadow: "0 2px 6px rgba(0,0,0,0.1)" 
			// Adds shadow effect
		};
		
		// Returns the user interface for the Contact page
		return (
		<div style={cardStyle}>
		{/* Card container */}
		
		<h2>Contact Page</h2>
		{/* Displays page heading */}
		
		<p><b>Clinic Name:</b> Sunrise Health Clinic</p>
		{/* Displays clinic name */}
		
		<p><b>Phone:</b> +91 98765 43210</p>
		{/* Displays phone number */}
		
		<p><b>Email:</b> contact@sunriseclinic.com</p>
		{/* Displays email address */}
		
		<p><b>Working Hours:</b> 9:00 AM - 6:00 PM</p>
		{/* Displays clinic working hours */}
		</div>
		);
	}
	
	// Exports the Contact component
	export default Contact;