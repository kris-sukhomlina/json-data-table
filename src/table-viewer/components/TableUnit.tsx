import React, { useState } from 'react';
import { HasPhone, HasRelatives, IRecord } from '../model/Record';
import { Table } from '../Table';
import * as S from '../Table.style';

interface IProps {
	record: IRecord;
}

export const TableUnit = (props: IProps) => {
	const { record } = props;
	const [chevronClicked, setChevronClicked] = useState<boolean>(false);

	const tableRowValues = Object.values(record.data).map((value, index) => (
		<td key={`${index}-td-data-${value}`}>{value}</td>
	));

	const handleChevronClicked = () => {
		setChevronClicked(!chevronClicked);
	};

	const noSubtablePresent = !record.kids['has_phone'] && !record.kids['has_relatives'];
	const relatives =
		(record.kids as HasRelatives).has_relatives &&
		(record.kids as HasRelatives).has_relatives.records;
	const phones =
		(record.kids as HasPhone).has_phone &&
		(record.kids as HasPhone).has_phone.records;

	return (
		<>
			<tr>
				{noSubtablePresent ? (
					<td />
				) : (
					<S.Chevron onClick={handleChevronClicked}>
						{chevronClicked ? <span>&#9650;</span> : <span>&#9660;</span>}
					</S.Chevron>
				)}
				{tableRowValues}
			</tr>
			{!noSubtablePresent && (
				<S.SubTableRow hidden={!chevronClicked}>
					<S.SubTable colSpan={11}>
						<Table records={relatives || phones} />
					</S.SubTable>
				</S.SubTableRow>
			)}
		</>
	);
};
