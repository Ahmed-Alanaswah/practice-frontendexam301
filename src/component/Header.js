import React, { Component } from "react";
import { Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
export class Header extends Component {
	render() {
		return (
			<Nav
				activeKey="/home"
				onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
			>
				<NavLink to="/">home</NavLink>

				<NavLink to="/favourite">favourite</NavLink>
			</Nav>
		);
	}
}

export default Header;
