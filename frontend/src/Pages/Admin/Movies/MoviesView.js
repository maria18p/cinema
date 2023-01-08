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

const MoviesView = (props) => {
	const [displayForm, setDisplayForm] = useState(false);
	const nameRef = useRef(null);
	const lengthRef = useRef(null);
	const posterRef = useRef(null);
	const priceRef = useRef(null);

	const toggleDisplay = () => {
		setDisplayForm(!displayForm);
	};

	const generateForm = () => {
		if (!displayForm) return <></>;
		return (
			<>
				<VerticalContainer>
					<ContainerGrid2>
						<InputLabel>Name:</InputLabel>
						<FormInput ref={nameRef} />
						<InputLabel>Length (in minutes):</InputLabel>
						<FormInput ref={lengthRef} />
						<InputLabel>Poster:</InputLabel>
						<FormInput ref={posterRef} />
						<InputLabel>Price:</InputLabel>
						<FormInput type="number" ref={priceRef} />
					</ContainerGrid2>
					<FormSubmit onClick={() => submitForm()}>Submit</FormSubmit>
				</VerticalContainer>
			</>
		);
	};

	const submitForm = () => {
		const name = nameRef.current.value;
		const length = lengthRef.current.value;
		const poster = posterRef.current.value;
		props.submitForm({ name: name, length: length, poster: poster });
	};

	return (
		<>
			<VerticalContainer>
				<Title>Movies</Title>
				<ManageOption onClick={() => toggleDisplay()}>Toggle Add</ManageOption>
				{generateForm()}
				<DataTable data={props.data} />
			</VerticalContainer>
		</>
	);
};

export default MoviesView;
