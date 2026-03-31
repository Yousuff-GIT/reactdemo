import React, { Component } from "react"; // Imports React and Component class
	
	// Defines a class component named LifeCycleDemo
	class LifeCycleDemo extends Component {
		// Constructor is invoked first when the component is created
		constructor(props) {
			super(props); // Enables use of props in the class component
			
			// Initializes the internal state of the component
			this.state = {
				count: 0 // Initial count value
			};
			
			// Displays a message in the console when constructor runs
			console.log("Constructor executed");
		}
		
		// Invoked once after the component is inserted into the DOM
		componentDidMount() {
			console.log("componentDidMount executed");
		}
		
		// Invoked after the component updates due to state or props change
		componentDidUpdate() {
			console.log("componentDidUpdate executed");
		}
		
		// Invoked just before the component is removed from the DOM
		componentWillUnmount() {
			console.log("componentWillUnmount executed");
		}
		
		// Method to update the count value in the state
		increaseCount = () => {
			this.setState({
				count: this.state.count + 1 // Increases count by 1
			});
		};
		
		// render() returns the UI of the component
		render() {
			return (
			<div>
			{/* Heading for lifecycle demonstration */}
			<h2>React Life Cycle Demo</h2>
			
			{/* Displays the current count value */}
			<p>Count Value: {this.state.count}</p>
			
			{/* Button used to update the state */}
			<button onClick={this.increaseCount}>Increase Count</button>
			</div>
			);
		}
	}
	
	// Exports the component for use in App.js
	export default LifeCycleDemo;