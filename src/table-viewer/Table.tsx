import React from 'react';
import { TableUnit } from './components/TableUnit';
import { IRecord } from './model/Record';

import * as S from './Table.style';

interface IProps {
	records: IRecord[];
}

export const Table = (props: IProps) => {
	const tableHeader = Object.keys(props.records[0].data).map((columnName, index) => (
		<th key={`${index}-th-${columnName}`}>{columnName}</th>
	));

	const tableData = props.records.map((value: IRecord, index) => (
		<TableUnit key={`main-table-record-${index}`} record={value} />
	));

	return (
		<S.TableView>
			<S.TableHeader>
				<th />
				{tableHeader}
			</S.TableHeader>
			{tableData}
		</S.TableView>
	);
};
