import styled from "styled-components";

export const MoviesGrid = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr 1fr;
	text-align: center
	/* align-items: center; */
	/* gap: 100px; */
	width: 100%;
`;

export const MoviesGridItem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
`;

export const MoviesGridItemTitle = styled.span`
text-align: center
	width: 100%;
`;

export const MoviesGridImage = styled.img`
	width: 70%;
	height: 100%;
	object-fit: cover;
`;
