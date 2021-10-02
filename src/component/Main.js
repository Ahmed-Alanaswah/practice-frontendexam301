import axios from "axios";
import React, { Component } from "react";
import ColorCards from "./ColorCards";
import { Row } from "react-bootstrap";

export class Main extends Component {
	constructor(props) {
		super(props);
		this.state = {
			dataColorApi: [],
			showDataColor: false,
		};
	}

	componentDidMount = async () => {
		const request = await axios.get(`http://localhost:8001/color`);
		this.setState({
			dataColorApi: request.data,
			showDataColor: true,
		});
	};

	addToFavourite = async (obj) => {
		const request = await axios.post(
			`http://localhost:8001/color/favourite`,
			obj
		);
		console.log(obj);
	};
	render() {
		return (
			<Row>
				{this.state.showDataColor && (
					<ColorCards
						dataColorApi={this.state.dataColorApi}
						addToFavourite={this.addToFavourite}
					/>
				)}
			</Row>
		);
	}
}

export default Main;
