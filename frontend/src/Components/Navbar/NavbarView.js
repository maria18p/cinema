import React from "react";
import { NavbarContainer, NavbarOption } from "./Navbar.style";

const NavbarView = (props) => {
	const addOptions = () => {
		return (
			<>
				{props.options.map((option, index) => {
					return (
						<NavbarOption key={index} onClick={() => props.goTo(option)}>
							{option}
						</NavbarOption>
					);
				})}
			</>
		);
	};

	return <NavbarContainer>{addOptions()}</NavbarContainer>;
};

export default NavbarView;
