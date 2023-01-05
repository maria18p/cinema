import React from "react";
import { SidebarContainer, SidebarItem } from "./Sidebar.Style";

const SidebarView = (props) => {
	const generateOptions = () => {
		return (
			<>
				{props.sidebarOptions.map((option, index) => {
					return (
						<SidebarItem
							key={index}
							onClick={() => props.optionClicked(option)}
						>
							{option}
						</SidebarItem>
					);
				})}
			</>
		);
	};

	return <SidebarContainer>{generateOptions()}</SidebarContainer>;
};

export default SidebarView;
