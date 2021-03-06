import styled from "styled-components";

export const Main = styled.div`
	display: flex;
	flex-direction: column;
	background-color: ${(p) => p.theme.bg};
`;

export const Scrollable = styled.div`
	display: flex;
	flex-direction: column;
	height: calc(100% - 76px);
	overflow-y: auto;
`;
