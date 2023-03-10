import React, { useContext } from "react";
import NavbarView from "./NavbarView";
import { useNavigate } from "react-router-dom";
const Navbar = () => {
	const navigate = useNavigate();
	const options = ["Home", "Login", "Tickets", "Movies", "Register", "Manage"];

	const goTo = (link) => {
		navigate(`/${link}`);
	};

	return <NavbarView options={options} goTo={goTo} />;
};

export default Navbar;
