import React, { useState } from "react";
import SidebarView from "./SidebarView";

const Sidebar = (props) => {
	const optionClicked = (option) => {
		props.optionClicked(option);
	};

	return (
		<SidebarView
			sidebarOptions={props.sidebarOptions}
			optionClicked={optionClicked}
		/>
	);
};

export default Sidebar;
