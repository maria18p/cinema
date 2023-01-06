import React from "react";
import { PageWithSidebarContainer } from "../../Style/general";
import Sidebar from "../../Components/Sidebar";

const AdminPageView = (props) => {
	return (
		<>
			<PageWithSidebarContainer>
				<Sidebar
					sidebarOptions={props.sidebarOptions}
					optionClicked={props.switchContent}
				/>
				{props.content}
			</PageWithSidebarContainer>
		</>
	);
};

export default AdminPageView;
