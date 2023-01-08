import React, { useContext } from "react";
import shortid from "shortid";
import { NavbarContainer, NavbarOption, UserGreeting } from "./Navbar.style";
import { AppContext } from "../../AppContext";

const NavbarView = (props) => {
	const appContext = useContext(AppContext);

	const addOptions = () => {
		return (
			<>
				{props.options.map((option, index) => {
					if (option == "Manage") {
						if (appContext.isAdmin !== true)
							return <span key={shortid.generate()}></span>;
					}
					return (
						<NavbarOption
							key={shortid.generate()}
							onClick={() => props.goTo(option)}
						>
							{option}
						</NavbarOption>
					);
				})}
				<UserGreeting>Hello {appContext.username} </UserGreeting>
			</>
		);
	};

	return <NavbarContainer>{addOptions()}</NavbarContainer>;
};

export default NavbarView;
