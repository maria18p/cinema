import React, { useEffect, useState } from "react";
import AdminPageView from "./AdminPageView";

const AdminPage = () => {
	const [content, setContent] = useState("users");
	const [data, setData] = useState([]);
	const [attributes, setAttributes] = useState([]);

	const sidebarOptions = [
		"Movies",
		"Halls",
		"Seats",
		"Users",
		"Presentations",
		"Tickets",
	];

	const switchContent = (content) => setContent(content);

	useEffect(() => {
		const userObj = {
			username: "admin",
			password: "admin",
		};
		// TODO request data here
		const allAttributes = ["Username", "Password"];

		const allData = [];
		allData.push(userObj);

		setData(allData);
		setAttributes(allAttributes);
	}, []);

	return (
		<AdminPageView
			sidebarOptions={sidebarOptions}
			switchContent={switchContent}
			content={content}
			data={{ attributes: attributes, values: data }}
		/>
	);
};

export default AdminPage;
