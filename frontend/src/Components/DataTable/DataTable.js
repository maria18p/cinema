import React, { useEffect, useState } from "react";
import DataTableView from "./DataTableView";

const DataTable = (props) => {
	const [displayContent, setDisplayContent] = useState(false);

	const showContent = () => {
		if (!displayContent) return <>loading...</>;
		return (
			<>
				<DataTableView data={props.data} />
			</>
		);
	};

	useEffect(() => {
		setDisplayContent(true);
	}, [props.data]);

	return <>{showContent()}</>;
};

export default DataTable;
