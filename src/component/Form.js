import React, { Component } from "react";

export class Form extends Component {
	render() {
		return (
			<div>
				<form onSubmit={this.props.UpdateData}>
					<input
						type="text"
						onChange={this.props.updatestrDrink}
						value={this.props.strDrink}
					/>
					<input
						type="text"
						onChange={this.props.updateidDrink}
						value={this.props.idDrink}
					/>
					<input type="submit" value="update" />
				</form>
			</div>
		);
	}
}

export default Form;
