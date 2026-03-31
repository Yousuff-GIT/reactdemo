import React from "react"; // Imports React

// Functional component used to display the heading section of the dashboard
function DashboardHeader(props) {
  return (
    <div>
      {/* Main title received from App component through props */}
      <h1>{props.title}</h1>

      {/* Subtitle received from App component through props */}
      <p>{props.subtitle}</p>
    </div>
  );
}

// Exports the component so it can be used in App.js
export default DashboardHeader;