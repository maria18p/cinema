import React from "react";
import NavbarView from "./NavbarView";

const Navbar = () => {
	const options = ["Home", "Login", "Tickets", "Manage", "Register"];

	return <NavbarView options={options} />;
};

export default Navbar;
