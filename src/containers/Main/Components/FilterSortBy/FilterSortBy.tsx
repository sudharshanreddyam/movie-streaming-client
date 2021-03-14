import React from 'react';

const FilterSortBy = () => {
	const filters = [
		'Release Date',
		'Title'
	];

	const filterSortByStyle = {
		padding: "10px",
		fontSize: "18px",
		fontFamily: "sans-serif",
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",
		width: "180px",
	}

	return (
		<div style={filterSortByStyle}>
			Sort By
			<select name='' id=''>
				{filters.map((filter, index) =>
					<option key={index} value={filter}>{filter}</option>
				)}
			</select>
		</div>
	);
}

export default FilterSortBy;
