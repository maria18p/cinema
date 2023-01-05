import React from "react";
import { Title, VerticalContainer } from "../../../Style/general";
import { DataTCell, DataTHead, DataTRow, DataTable } from "./Content.style";

const ContentView = (props) => {
	const generateTable = () => {
		return (
			<DataTable>
				{props.data.attributes.map((item, index) => {
					return <DataTHead key={index}>{item}</DataTHead>;
				})}

				{props.data.values.map((item, index) => {
					return (
						<DataTRow key={index}>
							<DataTCell key={index}>{item.username}</DataTCell>
							<DataTCell key={index}>{item.password}</DataTCell>
						</DataTRow>
					);
				})}
			</DataTable>
		);
	};

	return (
		<>
			<VerticalContainer>
				<Title>{props.content}</Title>
				{generateTable()}
			</VerticalContainer>
		</>
	);
};

export default ContentView;
