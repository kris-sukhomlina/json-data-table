import styled from 'styled-components';

export const AppContainer = styled.div`
	font-size: 12px;
	padding: 2rem;
`;

export const TableView = styled.table`
	width: 100%;
	border-collapse: collapse;
	border: 1px solid #ccc;
	td,
	th {
		text-align: left;
		vertical-align: middle;
		padding: 0.5rem;
	}
	td {
		font-size: 10px;
	}
`;

export const SubTable = styled.td`
	padding: 1rem !important;
`;

export const TableHeader = styled.tr`
	background-color: #f4f4f4;
`;

export const SubTableRow = styled.tr`
	display: ${props => (props.hidden ? 'none' : 'table-row-group')};
`;

export const Chevron = styled.td`
	cursor: pointer;
`;
