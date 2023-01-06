import React, { useRef, useState } from "react";
import {
	ContainerGrid2,
	FormInput,
	FormSubmit,
	InputLabel,
	Title,
	VerticalContainer,
} from "../../../Style/general";
import DataTable from "../../../Components/DataTable/DataTable";
import { ManageOption } from "../../../Components/DataTable/DataTable.style";

const HallsView = (props) => {
	const [displayForm, setDisplayForm] = useState(false);
	const nameRef = useRef(null);

	const submitForm = async () => {
		const hallObj = { name: nameRef.current.value };
		props.submitForm(hallObj);
	};

	const generateForm = () => {
		if (!displayForm) return <></>;
		return (
			<>
				<VerticalContainer>
					<ContainerGrid2>
						<InputLabel>Name:</InputLabel>
						<FormInput ref={nameRef} />
					</ContainerGrid2>
					<FormSubmit onClick={() => submitForm()}>Submit</FormSubmit>
				</VerticalContainer>
			</>
		);
	};

	const toggleDisplayForm = () => {
		setDisplayForm(!displayForm);
	};

	return (
		<>
			<VerticalContainer>
				<Title>Halls</Title>
				<ManageOption onClick={toggleDisplayForm}>Add</ManageOption>
				{generateForm()}
				<DataTable data={props.data} />
			</VerticalContainer>
		</>
	);
};

export default HallsView;
