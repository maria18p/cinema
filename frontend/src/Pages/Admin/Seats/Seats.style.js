import styled from "styled-components";

export const SeatsTable = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	gap: 15px;
`;

export const SeatCellContainer = styled.div`
	display: grid;
	grid-row-columns: 1fr 1fr;
	text-align: center;
	gap: 5px;
	padding: 5px;
	border: 2px solid black;
	border-radius: 15px;
	background-color: white;
	color: black;
	&:hover {
		cursor: pointer;
		background-color: yellow;
		color: white;
	}
`;

export const SeatInfo = styled.span`
	border: none;
	background-color: transparent;
`;

export const SeatButton = styled.button`
	border: none;
	background-color: transparent;
`;
