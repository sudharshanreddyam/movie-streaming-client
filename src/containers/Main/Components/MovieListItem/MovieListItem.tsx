import Image from '../../../../components/Image/Image';
import { MovieListItemModel } from '../../../../models/movieListItem.model';
import PropTypes from 'prop-types';
import React from 'react';
import styled from 'styled-components';

const ArticleSc = styled.article`
	width: 320px;
	font-family: sans-serif;
    color: #b1b1b1;
`;

const MovieListItem = (props: { item: MovieListItemModel }) => {
	const { item } = props;

	return (
		<ArticleSc>
				<Image src={item.thumbnail} />
				<h3>
					{item.title}
				</h3>
				<div>
					{new Date(item.releaseDate.toString()).getFullYear()}
				</div>
				<div>
					{item.genres.join(', ')}
				</div>
		</ArticleSc>
	);
};

MovieListItem.propTypes = {
	item: PropTypes.exact({
		id: PropTypes.string,
		title: PropTypes.string,
		thumbnail: PropTypes.string,
		releaseDate: PropTypes.object, // How to set Date type
		genres: PropTypes.arrayOf(PropTypes.string)
	})
};

export default MovieListItem;
