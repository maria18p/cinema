import React, { useRef, useState } from "react";
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
import shortid from "shortid";
import { ManageOption } from "../../../Components/DataTable/DataTable.style";
import {
	SeatButton,
	SeatCellContainer,
	SeatInfo,
	SeatsTable,
} from "./Seats.style";

export default function SeatsView(props) {
	const hallRef = useRef(null);
	const numberRef = useRef(null);
	const [displayForm, setDisplayForm] = useState(true);

	const toggleDisplayForm = () => setDisplayForm(!displayForm);
	const selectHall = (event) => {
		props.selectHall(event.target.value);
	};

	const generateSelector = () => {
		return (
			<FormSelect
				ref={hallRef}
				onChange={(event) => {
					selectHall(event);
				}}
			>
				<SelectOption>select</SelectOption>
				{props.halls.map((item, index) => {
					return (
						<SelectOption key={shortid.generate()} value={item.id}>
							{item.name}
						</SelectOption>
					);
				})}
			</FormSelect>
		);
	};

	const generateForm = () => {
		if (!displayForm) return <></>;
		return (
			<>
				<VerticalContainer>
					<ContainerGrid2>
						<InputLabel>Seats to add:</InputLabel>
						<FormInput type="number" ref={numberRef} />
					</ContainerGrid2>
					<FormSubmit onClick={submitForm}>Submit</FormSubmit>
				</VerticalContainer>
			</>
		);
	};

	const generateSeatsGrid = () => {
		if (props.seats.length == 0) return <>No seats yet</>;
		console.log("props.seats", props.seats);
		return (
			<>
				<SeatsTable>
					{props.seats.map((item, index) => {
						return (
							<SeatCellContainer key={shortid.generate()}>
								<SeatInfo key={shortid.generate()}> {item.name} </SeatInfo>
								<SeatInfo key={shortid.generate()}>
									<SeatButton key={shortid.generate()}>Delete</SeatButton>
								</SeatInfo>
							</SeatCellContainer>
						);
					})}
				</SeatsTable>
			</>
		);
	};

	const submitForm = () => {
		props.addSeats(parseInt(numberRef.current.value));
	};

	return (
		<>
			<VerticalContainer>
				<Title>Hall Seats</Title>
				{generateSelector()}
				<ManageOption onClick={() => toggleDisplayForm()}>
					Add Seat
				</ManageOption>
				{generateForm()}
				{generateSeatsGrid()}
			</VerticalContainer>
		</>
	);
}
