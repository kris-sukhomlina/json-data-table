import React from 'react';
import data from './data/data-1.json';
import { Table } from './table-viewer/Table';

import * as S from './table-viewer/Table.style';

// FIXME: date format - non given, otherwise would have used moment
// FIXME: number values - also not specified in the task
// FIXME: design

function App() {
	return (
		<S.AppContainer>
			<Table records={data} />
		</S.AppContainer>
	);
}

export default App;
