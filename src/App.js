	import React from "react"; 
	// Imports the React library so that JSX and React components can be used
	
	import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; 
	// BrowserRouter enables routing in the application
	// Routes acts as a container for all route definitions
	// Route is used to connect a URL path with a component
	// Link is used to navigate between pages without reloading the full application
	
	import Home from "./Home"; 
	// Imports the Home page component from Home.js
	
	import Doctors from "./Doctors"; 
	// Imports the Doctors page component from Doctors.js
	
	import Appointments from "./Appointments"; 
	// Imports the Appointments page component from Appointments.js
	
	import Contact from "./Contact"; 
	// Imports the Contact page component from Contact.js
	
	// Defines the main functional component of the application
	function App() {
		// Inline style object for the overall page container
		const pageStyle = {
			fontFamily: "Arial",           
			// Sets the font family for the page
			
			padding: "20px",              
			// Adds space around the content
			
			backgroundColor: "#f4f6f7",   
			// Sets a light background color for the page
			
			minHeight: "100vh"            
			// Makes the page at least as tall as the browser window
		};
		
		// Inline style object for the navigation container
		const navStyle = {
			marginBottom: "20px"          
			// Adds spacing below the navigation links
		};
		
		// Inline style object for each navigation link
		const linkStyle = {
			marginRight: "15px",          
			// Adds spacing between links
			
			textDecoration: "none",       
			// Removes underline from links
			
			color: "#1f618d",             
			// Sets link color
			
			fontWeight: "bold"            
			// Makes the link text bold
		};
		
		// Returns the user interface of the main component
		return (
		<BrowserRouter>
		{/* BrowserRouter wraps the entire application to enable routing */}
		
		<div style={pageStyle}>
		{/* Main container for the application with page styling */}
		
		<h1>Clinic Appointment Management Portal</h1>
		{/* Displays the main title of the application */}
		
		<div style={navStyle}>
		{/* Navigation container */}
		
		<Link to="/" style={linkStyle}>Home</Link>
		{/* Navigates to the Home page */}
		
		<Link to="/doctors" style={linkStyle}>Doctors</Link>
		{/* Navigates to the Doctors page */}
		
		<Link to="/appointments" style={linkStyle}>Appointments</Link>
		{/* Navigates to the Appointments page */}
		
		<Link to="/contact" style={linkStyle}>Contact</Link>
		{/* Navigates to the Contact page */}
		</div>
		
		<Routes>
		{/* Holds all route definitions */}
		
		<Route path="/" element={<Home />} />
		{/* When the URL is "/", the Home component is displayed */}
		
		<Route path="/doctors" element={<Doctors />} />
		{/* When the URL is "/doctors", the Doctors component is displayed */}
		
		<Route path="/appointments" element={<Appointments />} />
		{/* When the URL is "/appointments", the Appointments component is displayed */}
		
		<Route path="/contact" element={<Contact />} />
		{/* When the URL is "/contact", the Contact component is displayed */}
		</Routes>
		</div>
		</BrowserRouter>
		);
	}
	
	// Exports the App component so that it can be used in index.js
	export default App;