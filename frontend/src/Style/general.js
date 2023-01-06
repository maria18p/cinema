import "bootstrap/dist/css/bootstrap.css";
import styled from "styled-components";

export const Title = styled.h1`
	color: white;
`;

export const HorizontalContainer = styled.div`
	display: flex;
	flex-direction: row;
	gap: 10px;
	justify-content: center;
	align-items: center;
`;

export const VerticalContainer = styled.div`
	display: flex;
	flex-direction: column;
	gap: 10px;
	justify-content: center;
	align-items: center;
	height: 100%;
`;

export const ContainerGrid2 = styled.div`
	display: grid;
	gap: 15px;
	/* width: 40%; */
	grid-template-columns: 0.5fr 1fr;
`;

export const InputLabel = styled.label`
	color: white;
`;

export const FormInput = styled.input`
	color: white;
	border: 1px solid white;
`;

export const FormSubmit = styled.button`
	color: white;
	border: 0.5px solid white;
	border-radius: 10px;
	padding: 5px;
	&:hover {
		cursor: pointer;
		color: yellow;
	}
`;

export const PageWithSidebarContainer = styled.div`
	display: grid;
	grid-template-columns: 0.2fr 1fr;
`;

export const FormSelect = styled.select``;

export const SelectOption = styled.option``;
