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

const UsersView = (props) => {
	const usernameRef = useRef(null);
	const passwordRef = useRef(null);
	const [displayForm, setDisplayForm] = useState(false);
	const toggleForm = () => setDisplayForm(!displayForm);

	const submitForm = () => {
		const requestObject = {
			username: usernameRef.current.value,
			password: passwordRef.current.value,
		};
		props.submitForm(requestObject);
	};

	const generateForm = () => {
		if (!displayForm) return <></>;
		return (
			<>
				{
					<VerticalContainer>
						<ContainerGrid2>
							<InputLabel>Username:</InputLabel>
							<FormInput ref={usernameRef} />
							<InputLabel>Password:</InputLabel>
							<FormInput ref={passwordRef} />
							<FormSubmit onClick={() => submitForm()}>Submit</FormSubmit>
						</ContainerGrid2>
					</VerticalContainer>
				}
			</>
		);
	};

	return (
		<VerticalContainer>
			<Title>Users</Title>
			<ManageOption onClick={() => toggleForm()}>Toggle Add</ManageOption>
			{generateForm()}
			<DataTable data={props.data} />
		</VerticalContainer>
	);
};

export default UsersView;
