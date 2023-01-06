import React, { useState } from "react";
import AdminPageView from "./AdminPageView";
import Users from "./Users";
import Movies from "./Movies";
import Halls from "./Halls/Halls";
import Presentations from "./Presentations";
import Seats from "./Seats/Seats";

const AdminPage = () => {
	const [content, setContent] = useState(<Seats />);

	const sidebarOptions = [
		"Movies",
		"Halls",
		"Seats",
		"Users",
		"Presentations",
		"Tickets",
	];

	const switchContent = (content) => {
		switch (content) {
			case "Users":
				setContent(<Users />);
				break;
			case "Movies":
				setContent(<Movies />);
				break;
			case "Halls":
				setContent(<Halls />);
				break;
			case "Presentations":
				setContent(<Presentations />);
				break;
			case "Seats":
				setContent(<Seats />);
				break;
			default:
				switchContent("Users");
		}
	};

	// useEffect(() => {
	// const userObj = {
	// 	username: "admin",
	// 	password: "admin",
	// };
	// // TODO request data here
	// const allAttributes = ["Username", "Password"];
	// const allData = [];
	// allData.push(userObj);
	// allData.push(userObj);
	// allData.push(userObj);
	// setData(allData);
	// setAttributes(allAttributes);
	// const dataObj = { attributes: attributes, values: data };
	// setData(dataObj);
	// switchContent("Users");
	// }, []);

	return (
		<AdminPageView
			sidebarOptions={sidebarOptions}
			switchContent={switchContent}
			content={content}
		/>
	);
};

export default AdminPage;
