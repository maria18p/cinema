import React from "react";
import {
	PageWithSidebarContainer,
	Title,
	VerticalContainer,
} from "../../Style/general";
import Sidebar from "../../Components/Sidebar";
import Content from "./Content/Content";

const AdminPageView = (props) => {
	return (
		<>
			<PageWithSidebarContainer>
				<Sidebar
					sidebarOptions={props.sidebarOptions}
					optionClicked={props.switchContent}
				/>
				<Content content={props.content} data={props.data} />
			</PageWithSidebarContainer>
		</>
	);
};

export default AdminPageView;
