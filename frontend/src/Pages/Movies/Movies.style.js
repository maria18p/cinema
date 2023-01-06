import styled from "styled-components";

export const MoviesGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
	gap: 20px;
`;

export const MoviesGridItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

export const MoviesGridItemTitle = styled.span``;

export const MoviesGridImage = styled.img`
	width: 200px;
	height: 500px;
	object-fit: cover;
`;
