
import React from 'react';
import styled from 'styled-components';

import FilterByCategory from '../FilterByCategory/FilterByCategory'
import FilterSortBy from '../FilterSortBy/FilterSortBy';

const FiltersPanelWrapperSc = styled.div`
	display: flex;
	justify-content: space-between;
    flex-direction: row;
`;

const FiltersPanel = () =>
	<FiltersPanelWrapperSc>
		<FilterByCategory />
		<FilterSortBy />
	</FiltersPanelWrapperSc>;

export default FiltersPanel;
