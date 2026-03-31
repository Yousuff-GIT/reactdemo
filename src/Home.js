	import React, { useEffect, useState } from "react"; 
	// Imports React
	// useState is a hook used to store and update data in a functional component
	// useEffect is a hook used to run code after the component renders
	
	// Defines the Home page component
	function Home() {
		// Creates a state variable called message
		// message stores the current value
		// setMessage is the function used to update the value
		// The initial value is an empty string
		const [message, setMessage] = useState("");
		
		// useEffect runs after the component is rendered
		// The empty dependency array [] means this effect runs only once
		useEffect(() => {
			setMessage("Welcome to the clinic appointment management portal.");
			// Updates the message after the component loads
		}, []);
		
		// Inline style object for the card layout
		const cardStyle = {
			backgroundColor: "white",        
			// Sets card background color
			
			padding: "20px",                 
			// Adds spacing inside the card
			
			borderRadius: "10px",            
			// Rounds the card corners
			
			boxShadow: "0 2px 6px rgba(0,0,0,0.1)" 
			// Adds shadow effect to the card
		};
		
		// Returns the user interface for the Home page
		return (
		<div style={cardStyle}>
		{/* Card container for Home page */}
		
		<h2>Home Page</h2>
		{/* Displays page heading */}
		
		<p>{message}</p>
		{/* Displays the message stored in state */}
		
		<p>This portal helps in viewing doctors, appointments, and clinic contact details.</p>
		{/* Displays a short description of the application */}
		</div>
		);
	}
	
	// Exports the Home component
	export default Home;