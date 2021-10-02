import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
export class ColorCards extends Component {
	render() {
		return this.props.dataColorApi.map((obj) => {
			return (
				<Card style={{ width: "18rem" }}>
					<Card.Img variant="top" src={obj.strDrinkThumb} />
					<Card.Body>
						<Card.Title>{obj.strDrink}</Card.Title>
						<Card.Text>{obj.idDrink}</Card.Text>
						<Button
							variant="primary"
							onClick={(e) => {
								this.props.addToFavourite(obj);
							}}
						>
							add to favourite
						</Button>
					</Card.Body>
				</Card>
			);
		});
	}
}

export default ColorCards;
