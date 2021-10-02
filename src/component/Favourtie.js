import axios from "axios";
import React, { Component } from "react";
import { Row } from "react-bootstrap";
import FavouriteCards from "./FavouriteCards";
import Form from "./Form";
export class Favourtie extends Component {
	constructor(props) {
		super(props);
		this.state = {
			favouriteData: [],
			showFavouriteData: false,
			slug: "",
			strDrink: "",
			idDrink: "",
			showForm: false,
		};
	}

	componentDidMount = async () => {
		const request = await axios.get(
			`https://practice301exam.herokuapp.com/color/favourite`
		);
		this.setState({
			favouriteData: request.data,
			showFavouriteData: true,
		});
	};

	removeFavourite = async (slug) => {
		const request = await axios.delete(
			`https://practice301exam.herokuapp.com//color/favourite/${slug}`
		);

		this.setState({
			favouriteData: request.data,
			showFavouriteData: true,
		});
	};
	showFormUpdate = (slug, strDrink, idDrink) => {
		this.setState({
			slug: slug,
			strDrink: strDrink,
			idDrink: idDrink,
			showForm: true,
		});
	};

	UpdateData = async (e) => {
		e.preventDefault();
		const updated = {
			strDrink: this.state.strDrink,
			idDrink: this.state.idDrink,
		};
		const request = await axios.put(
			`https://practice301exam.herokuapp.com//color/favourite/${this.state.slug}`,
			updated
		);

		this.setState({
			favouriteData: request.data,
			showFavouriteData: true,
		});
	};

	updatestrDrink = (e) => {
		this.setState({
			strDrink: e.target.value,
		});
	};

	updateidDrink = (e) => {
		this.setState({
			idDrink: e.target.value,
		});
	};

	render() {
		return (
			<Row>
				{this.state.showForm && (
					<Form
						idDrink={this.state.idDrink}
						strDrink={this.state.strDrink}
						updateidDrink={this.updateidDrink}
						updatestrDrink={this.updatestrDrink}
						UpdateData={this.UpdateData}
					/>
				)}
				{this.state.showFavouriteData && (
					<FavouriteCards
						favouriteData={this.state.favouriteData}
						removeFavourite={this.removeFavourite}
						showFormUpdate={this.showFormUpdate}
					/>
				)}
			</Row>
		);
	}
}

export default Favourtie;
