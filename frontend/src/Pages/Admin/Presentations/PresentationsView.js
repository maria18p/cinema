import React, { useEffect, useRef, useState } from "react";
import {
	ContainerGrid2,
	FormInput,
	FormSelect,
	FormSubmit,
	InputLabel,
	SelectOption,
	Title,
	VerticalContainer,
} from "../../../Style/general";
import { ManageOption } from "../../../Components/DataTable/DataTable.style";
import shortid from "shortid";
import DataTable from "../../../Components/DataTable";

const PresentationsView = (props) => {
	const movieRef = useRef(null);
	const timeRef = useRef(null);
	const dateRef = useRef(null);
	const hallRef = useRef(null);
	const [displayForm, setDisplayForm] = useState(false);
	const toggleForm = () => setDisplayForm(!displayForm);
	const [displayContent, setDisplayContent] = useState(false);

	const submitForm = () => {
		const requestObject = {
			movie: movieRef.current.value,
			time: timeRef.current.value,
			date: dateRef.current.value,
			hall: hallRef.current.value,
		};
		// console.log("requestObject", requestObject);
		props.submitForm(requestObject);
	};

	const generateForm = () => {
		if (!displayForm) return <></>;
		return (
			<>
				<VerticalContainer>
					<ContainerGrid2>
						<InputLabel>Movie:</InputLabel>
						<FormSelect ref={movieRef}>
							{props.movies.map((movie, index) => {
								return (
									<SelectOption key={shortid.generate()} value={movie.id}>
										{movie.name}
									</SelectOption>
								);
							})}
						</FormSelect>

						<InputLabel>Hall:</InputLabel>
						<FormSelect ref={hallRef}>
							{props.halls.map((hall, index) => {
								return (
									<SelectOption key={shortid.generate()} value={hall.id}>
										{hall.name}
									</SelectOption>
								);
							})}
						</FormSelect>

						<InputLabel>Date:</InputLabel>
						<FormInput type="date" ref={dateRef} />

						<InputLabel>Start:</InputLabel>
						<FormInput type="time" ref={timeRef} />
					</ContainerGrid2>
					<FormSubmit onClick={() => submitForm()}>Submit</FormSubmit>
				</VerticalContainer>
			</>
		);
	};

	useEffect(() => {
		setDisplayContent(true);
	}, [props.data]);

	const showContent = () => {
		if (!displayContent) return <>loading...</>;
		return (
			<>
				<VerticalContainer>
					<Title>Movie Presentations</Title>
					<ManageOption onClick={() => toggleForm()}>Toggle Add</ManageOption>
					{generateForm()}
					<DataTable data={props.data} />
				</VerticalContainer>
			</>
		);
	};

	return <>{showContent()}</>;
};

export default PresentationsView;
