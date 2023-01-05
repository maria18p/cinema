import styled from "styled-components";

export const SidebarContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const SidebarItem = styled.span`
	padding: 5px;
	margin-left: 10px;
	&:hover {
		cursor: pointer;
		colo: yellow;
	}
`;
