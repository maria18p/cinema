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
	const numberRef = useRef(null);
	const [displayForm, setDisplayForm] = useState(true);

	const toggleDisplayForm = () => setDisplayForm(!displayForm);
	const selectHall = (hall) => props.selectHall(hall);

	const generateSelector = () => {
		return (
			<FormSelect>
				{props.halls.map((item, index) => {
					return (
						<SelectOption
							key={shortid.generate()}
							onClick={() => selectHall(item)}
						>
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
