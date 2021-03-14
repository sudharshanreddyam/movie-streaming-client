import Link from '@Components/Link/Link';
import React from 'react';
import styled from 'styled-components';

const Ul = styled.ul`
	display: flex;
	padding: 0px;
`;

const Li = styled.li`

`;

const ListStyle = {
	listStyle: 'none',
	padding: '10px',
	fontSize: '18px',
	fontFamily: 'sans-serif',
}

const FilterByCategory = () => {
	const categories = [
		'Documentary',
		'Comedy',
		'Horror',
		'Crime'
	];

	return (
    <Ul>
      <li style={ListStyle}>All</li>
      {categories.map((category, index) => (
        <li style={ListStyle} key={index}>{category}</li>
      ))}
    </Ul>
  );
};

export default FilterByCategory;
