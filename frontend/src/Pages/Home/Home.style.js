import styled from "styled-components";

export const VerticalContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SeatContainer = styled.div`
	padding: 5px;
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 5px;
`;

export const EmptySeat = styled.button`
	background-color: green;
	border: 1px solid grey;
	border-radius: 15px;

	&:hover {
		background-color: black;
		cursor: pointer;
		color: white;
	}
`;

export const OccupiedSeat = styled.button`
	background-color: red;
	border: 1px solid grey;
	border-radius: 15px;

	/* &:hover {
		background-color: black;
		cursor: pointer;
		color: white;
	} */
`;

export const Submit = styled.button`
	border: 1px solid grey;
	border-radius: 15px;
	&:hover {
		background-color: black;
		cursor: pointer;
		color: white;
	}
`;
