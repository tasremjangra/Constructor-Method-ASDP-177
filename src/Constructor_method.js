import React, {Component} from 'react';

class Constructor_method extends Component{

	constructor(props){
		super(props)
		this.state={value:20};
	}

	change = () =>{
		
		this.setState({value:10});
	}
	render(){
		return(
			<div className="Constructor_method">
				<h1>The value of x is {this.state.value}</h1>
				<p>After clicking the button the value of x is change</p>
				<button onClick={this.change}>Click Me</button> 
			</div>
		);
	}
}
 
export default Constructor_method;