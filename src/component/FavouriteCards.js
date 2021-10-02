import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export class FavouriteCards extends Component {
	render() {
		return this.props.favouriteData.map((obj) => {
			return (
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={obj.strDrinkThumb} />
					<Card.Body>
						<Card.Title>{obj.strDrink}</Card.Title>
						<Card.Text>{obj.idDrink}</Card.Text>
						<Button
							variant="primary"
							onClick={(e) => {
								this.props.removeFavourite(obj.slug);
							}}
						>
							delete
						</Button>
						<Button
							variant="primary"
							onClick={(e) => {
								this.props.showFormUpdate(obj.slug, obj.strDrink, obj.idDrink);
							}}
						>
							update
						</Button>
					</Card.Body>
				</Card>
			);
		});
	}
}

export default FavouriteCards;
