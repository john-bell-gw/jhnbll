import React from 'react';

class ClickyThing extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			clickyToggle: false
		}
		this.handleClick = this.handleClick.bind(this);
	}
	handleClick(e){
		e.preventDefault();
		this.setState((prevState) => ({
			clickyToggle: !prevState.clickyToggle
			})
		)
	}
	render(){
		return(
			<div>
				<button onClick={this.handleClick} style={{ backgroundColor: this.state.clickyToggle ? '#fd9075' : '#4a79a9' }}>Click me</button>
			</div>
		)
	}
}

export default ClickyThing;