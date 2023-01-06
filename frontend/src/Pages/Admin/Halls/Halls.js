import React, { useEffect, useState } from "react";
import HallsView from "./HallsView";
import { addHall, getAllHalls } from "../../../API/hallsCalls";

const emptyDataObject = { attributes: ["name"], values: [["1"]] };

const Halls = () => {
	const [data, setData] = useState(emptyDataObject);

	const refreshData = async () => {
		const newData = await getAllHalls();
		const tableData = [];
		newData.forEach((obj) => {
			const dataRow = [];
			dataRow.push(obj.id);
			dataRow.push(obj.name);
			tableData.push(dataRow);
		});
		const attributes = ["Name"];
		setData({ attributes: attributes, values: tableData });
	};

	useEffect(() => {
		refreshData();
	}, []);

	const submitForm = async (requestObject) => {
		if (await addHall(requestObject)) refreshData();
	};

	return <HallsView data={data} submitForm={submitForm} />;
};

export default Halls;
