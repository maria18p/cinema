import React, { useEffect, useState } from "react";
import UsersView from "./UsersView";
import { addUser, getAllUsers } from "../../../API/userCalls";

const emptyDataObject = { attributes: [], values: [] };

const Users = () => {
	const [data, setData] = useState(emptyDataObject);
	const refreshData = async () => {
		const newData = await getAllUsers();
		console.log("userData", newData);
		const tableData = [];
		newData.forEach((obj) => {
			const dataRow = [];
			dataRow.push(obj.id);
			dataRow.push(obj.username);
			dataRow.push(obj.password);
			tableData.push(dataRow);
		});
		const attributes = ["Username", "Password"];
		setData({ attributes: attributes, values: tableData });
	};
	useEffect(() => {
		refreshData();
	}, []);

	const submitForm = async (requestObject) => {
		if (await addUser(requestObject)) refreshData();
	};

	return <UsersView data={data} submitForm={submitForm} />;
	// return <></>;
};

export default Users;
